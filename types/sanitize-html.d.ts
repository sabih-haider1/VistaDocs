declare module 'sanitize-html' {
  interface Options {
    allowedTags?: string[];
    allowedAttributes?: { [key: string]: string[] };
    allowedStyles?: { [key: string]: { [attr: string]: RegExp[] } };
    textFilter?: (text: string) => string;
    disallowedTagsMode?: 'discard' | 'escape' | 'recursiveEscape';
    transformTags?: { [key: string]: unknown };
    allowedSchemes?: string[];
  }
  namespace sanitizeHtml {
    function simpleTransform(tag: string, attrs: Record<string, string>): unknown;
  }
  function sanitizeHtml(dirty: string, options?: Options): string;
  export = sanitizeHtml;
}