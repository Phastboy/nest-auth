import { ValidationOptions } from "class-validator";
import { ValidateDependentFields } from "./dependent-fields.validator";

/**
 * Validates that the post-sharing configuration is valid.
 * @param validationOptions - Optional validation options
 * @returns PropertyDecorator
 *
 * @example
 * @ValidatePostSharing()
 * shareAsPost?: boolean;
 * post?: string;
 * isPublic?: boolean;
 */
export function ValidatePostSharing(validationOptions?: ValidationOptions) {
  return ValidateDependentFields(
    ['shareAsPost', 'isPublic'],
    ([post, shareAsPost, isPublic]) => {
      if (shareAsPost) return !!post && isPublic;
      return !post;
    },
    (args) => {
      const { shareAsPost, isPublic, post } = args.object as any;
      if (shareAsPost && !post) return 'Post is required when shareAsPost is true!';
      if (shareAsPost && !isPublic) return 'Event must be public if shareAsPost is true!';
      if (post && !shareAsPost) return 'shareAsPost must be true if post is provided!';
      if (post && !isPublic) return 'Event must be public if post is provided!';
      return 'Invalid post-sharing configuration!';
    },
    validationOptions,
  );
}