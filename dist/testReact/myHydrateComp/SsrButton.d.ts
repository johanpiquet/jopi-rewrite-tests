import "./SsrButton.scss";
/**
 * A simple button, without hydration, for SSR.
 */
export default function ({ name }: {
    name: string;
}): import("react/jsx-runtime").JSX.Element;
