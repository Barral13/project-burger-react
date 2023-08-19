import React from "react";
import { Content as ContentItens} from "./styles"

function Content({children}) {
    return (
        <ContentItens>{children}</ContentItens>
    )
}

export default Content