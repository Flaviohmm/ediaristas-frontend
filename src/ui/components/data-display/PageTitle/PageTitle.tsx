import React from "react";
import { PageTitleContent, PageTitleStyled } from "./PageTitle.style";

interface PageTitleProps {
    title: string;
    subtitle?: string | JSX.Element;
}

const PageTitle: React.FC<PageTitleProps> = (props) => {
    return (
        <PageTitleContent>
            <PageTitleStyled>
                {props.title}
            </PageTitleStyled>
            {props.subtitle}
        </PageTitleContent>
    )
}

export default PageTitle