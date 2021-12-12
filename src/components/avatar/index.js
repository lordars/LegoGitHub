import React from 'react'
import useGithub from "../../hooks/github-hooks";
import * as S from "./styled";

export default function Avatar() {
    const { githubState } = useGithub();
    return (
       
        <S.WrapperImage src={githubState.user.avatar} alt="Avatar of user" />
     
    )
}
