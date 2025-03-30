import { AppLogger } from './app.logger';
import * as net from 'net';

export interface PortFinderConfig {
  defaultPort: number;
  maxPortAttempts: number;
  restartDelay: number;
  host?: string;
  portRange?: [number, number];
}

export class PortFinder {
  private readonly logger = AppLogger.getInstance(PortFinder.name);
  private readonly config: PortFinderConfig;

  constructor(config: Partial<PortFinderConfig> = {}) {
    this.config = {
      defaultPort: parseInt(process.env.DEFAULT_PORT || '3000', 10),
      maxPortAttempts: parseInt(process.env.MAX_PORT_ATTEMPTS || '0', 10),
      restartDelay: parseInt(process.env.RESTART_DELAY || '1000', 10),
      host: process.env.HOST || '0.0.0.0',
      ...config,
    };
  }

  async findAvailablePort(): Promise<number> {
    let attempts = 0;
    let portToCheck = this.config.defaultPort;

    while (attempts <= this.config.maxPortAttempts) {
      if (await this.isPortAvailable(portToCheck)) {
        this.logger.info(`Found available port: ${portToCheck}`, {
          metadata: { port: portToCheck },
        });
        return portToCheck;
      }

      this.logger.warning(`Port ${portToCheck} is in use`, {
        metadata: { port: portToCheck },
      });

      portToCheck = this.getNextPort(portToCheck, attempts);
      attempts++;
    }

    return this.handleMaxAttemptsReached();
  }

  private async isPortAvailable(port: number): Promise<boolean> {
    await this.validatePort(port);

    return new Promise((resolve) => {
      const server = net.createServer();
      server.unref();

      server.on('error', () => {
        this.logger.debug(`Port ${port} is not available`, {
          metadata: { port },
        });
        resolve(false);
      });

      server.listen({ port, host: this.config.host }, () => {
        server.close(() => {
          this.logger.debug(`Port ${port} is available`, {
            metadata: { port },
          });
          resolve(true);
        });
      });
    });
  }

  private async validatePort(port: number): Promise<void> {
    if (isNaN(port)) {
      this.logger.error(`Port is not a number: ${port}`);
      throw new Error(`Port is not a number: ${port}`);
    }

    if (!Number.isInteger(port)) {
      this.logger.error(`Port is not an integer: ${port}`);
      throw new Error(`Port is not an integer: ${port}`);
    }

    if (port < 1024 || port > 65535) {
      this.logger.error(`Port is out of range (1024-65535): ${port}`);
      throw new Error(`Port is out of range (1024-65535): ${port}`);
    }
  }

  private getNextPort(currentPort: number, attempt: number): number {
    if (this.config.portRange) {
      const [min, max] = this.config.portRange;
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return currentPort + 1;
  }

  private async handleMaxAttemptsReached(): Promise<number> {
    this.logger.error(
      `Max attempts (${this.config.maxPortAttempts}) reached. ` +
        `Waiting ${this.config.restartDelay}ms before final retry...`,
      {
        metadata: {
          maxAttempts: this.config.maxPortAttempts,
          restartDelay: this.config.restartDelay,
        },
      },
    );

    await new Promise((resolve) =>
      setTimeout(resolve, this.config.restartDelay),
    );

    const finalPort = this.config.defaultPort + this.config.maxPortAttempts + 1;
    if (await this.isPortAvailable(finalPort)) {
      this.logger.warning(`Found available port after retry: ${finalPort}`, {
        metadata: { port: finalPort },
      });
      return finalPort;
    }

    this.logger.error('No available ports found after retrying');
    throw new Error('No available ports found after retrying');
  }
}
