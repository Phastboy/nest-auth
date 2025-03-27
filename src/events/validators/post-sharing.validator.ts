import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { CreateEventInput } from '../dto/create-event.input';

@ValidatorConstraint({ name: 'IsPostValidWhenSharing', async: false })
export class IsPostValidWhenSharing implements ValidatorConstraintInterface {
  validate(post: any, args: ValidationArguments) {
    const object = args.object as CreateEventInput;

    // If shareAsPost is true, post must be provided
    if (object.shareAsPost === true && !post) {
      return false;
    }

    // If post is provided, shareAsPost must be true
    if (post && object.shareAsPost !== true) {
      return false;
    }

    return true;
  }

  defaultMessage(args: ValidationArguments) {
    const object = args.object as CreateEventInput;

    if (object.shareAsPost === true && !object.post) {
      return 'Post details are required when shareAsPost is true';
    }

    if (object.post && object.shareAsPost !== true) {
      return 'shareAsPost must be true when providing post details';
    }

    return 'Invalid post sharing configuration';
  }
}
