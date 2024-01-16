import React from "react";

import {Layout} from "@client/Layout";
import {templates} from "@reactivated";
import * as styles from "@client/styles.css";

const Paragraph = (props: {children?: React.ReactNode}) => (
    <p className={styles.Paragraph}>{props.children}</p>
);

export default (props: templates.HelloWorld) => {
    const [showStyle, setShowStyle] = React.useState(false);

    return (
        <Layout title="Hello world!">
            <h1>Hello World!</h1>
            <Paragraph>
                The <span className={styles.testing}>best</span> opera is{" "}
                <strong>{props.opera.name}</strong> by{" "}
                <strong>{props.opera.composer.name}</strong>.
            </Paragraph>
            {showStyle === false ? (
                <Paragraph>
                    Click{" "}
                    <a href="#" onClick={() => setShowStyle(true)}>
                        here
                    </a>{" "}
                    to see what <span className={styles.more}>style</span> of opera it
                    is.
                </Paragraph>
            ) : (
                <Paragraph>
                    <strong>Style:</strong> {props.opera.style}
                </Paragraph>
            )}
        </Layout>
    );
};
