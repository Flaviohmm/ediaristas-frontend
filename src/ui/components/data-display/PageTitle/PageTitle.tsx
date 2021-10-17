import React from "react";
import { PageTitleContent, PageTitleStyled, PageSubtitleStyled } from "./PageTitle.style";

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
            <PageSubtitleStyled>
                {props.subtitle}
            </PageSubtitleStyled>
        </PageTitleContent>
    )
}

export default PageTitle