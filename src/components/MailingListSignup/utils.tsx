export enum SignUpState {
  DUPLICATE = "duplicate",
  EMPTY = "empty",
  ERROR = "error",
  INITIAL = "initial",
  INVALID = "invalid",
  SUBMITTING = "submitting",
  SUBMITTED = "submitted",
}

export const validateEmailAddress = (
  email: string
): RegExpMatchArray | null => {
  const emailPrefix = "[A-Z0-9a-z]([A-Z0-9a-z._%+-]{0,30}[A-Z0-9a-z])?";
  const emailServer = "([A-Z0-9a-z]([A-Z0-9a-z-]{0,30}[A-Z0-9a-z])?\\.){1,5}";
  const emailRegEx = `${emailPrefix}@${emailServer}[A-Za-z]{2,6}`;
  return email.match(emailRegEx);
};

export const getResultMessage = (signUpState: SignUpState): string => {
  switch (signUpState) {
    case SignUpState.EMPTY:
      return "Please enter an email.";
    case SignUpState.INVALID:
      return "You must enter a valid email address.";
    case SignUpState.DUPLICATE:
      return "This email is already on our mailing list!";
    case SignUpState.SUBMITTED:
      return "Thanks for signing up! We'll be in touch :)";
    default:
      return "An error has occurred. Please check back later!";
  }
};

// TODO(CCS): wire this up to the society's own mailing-list backend.
// The old Hack the North API call was removed so no data is sent to a third
// party; until a real endpoint exists this resolves as a local no-op.
export const signupRequest = async (
  email: string
): Promise<{ email: string; alreadySignup: boolean }> => {
  await Promise.resolve();
  return { email, alreadySignup: false };
};
