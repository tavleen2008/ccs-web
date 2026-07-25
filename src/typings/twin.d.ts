// twin.d.ts
import "twin.macro";
import styledImport, { CSSProp, css as cssImport } from "styled-components";

declare module "twin.macro" {
  // The styled and css imports
  const styled: typeof styledImport;
  const css: typeof cssImport;
}

declare module "react" {
  // The css prop
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: CSSProp;
  }
  // The inline svg css prop
  // `T` is required (unused) so this declaration's arity matches the
  // upstream `SVGProps<T>` in @types/react — TS declaration merging requires
  // identical type-parameter counts, so removing it would be a type error.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface SVGProps<T> extends SVGProps<SVGSVGElement> {
    css?: CSSProp;
  }
}

// The 'as' prop on styled components
declare global {
  namespace JSX {
    interface IntrinsicAttributes<T> extends DOMAttributes<T> {
      as?: string | Element;
    }
  }
}
