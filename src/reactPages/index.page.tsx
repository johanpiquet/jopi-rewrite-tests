import {isBrowserSide} from "jopi-rewrite-ui";
import {Link as RouterLink} from "react-router";
import React from "react";

interface SafeLinkProps {
    to: string;
    children: React.ReactNode;
    className?: string;
}

function SafeLink({to, children, ...props}: SafeLinkProps) {
    if (isBrowserSide()) {
        return <RouterLink to={to} {...props}>{children}</RouterLink>;
    }

    return <a href={to} {...props}>{children}</a>;
}

const text = isBrowserSide() ? "Browser side component" : "Server side component";

export default function() {
    return <div>
        <div>{text}</div>
        <SafeLink to="/products">Products</SafeLink>
    </div>
}