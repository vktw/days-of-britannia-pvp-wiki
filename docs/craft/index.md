# Craft

O **Beta 0.34.0** organiza o craft em onze categorias. Esta seção reúne as
receitas de maior interesse para jogadores, os materiais exigidos, a faixa de
skill e um controle para consultar a chance-base de sucesso.

!!! success "Fonte oficial"
    As tabelas foram conferidas no catálogo oficial do servidor. O gump de craft
    dentro do jogo continua sendo a referência final para receitas nativas que
    não aparecem nesta seleção player-facing.

## Escolha uma categoria

- [Alchemy](alchemy.md): poções e ingredientes alquímicos.
- [Blacksmithy](blacksmithy.md): armas, armaduras, metais e ferramentas de forja.
- [Bowcraft](bowcraft.md): arcos, bestas, flechas e linhas DoB Weapons.
- [Carpentry](carpentry.md): armas de madeira, móveis e peças especiais.
- [Cartography](cartography.md): mapas, cartas e atlas.
- [Cooking](cooking.md): comida, receitas especiais e preparos que exigem calor.
- [Glassblowing](glassblowing.md): vidraria, prismas e armas de vidro.
- [Inscription](inscription.md): livros, scrolls e receitas de escriba.
- [Masonry](masonry.md): peças de granito, esculturas e alvenaria.
- [Tailoring](tailoring.md): roupas, couro, quivers e belts.
- [Tinkering](tinkering.md): ferramentas, joias e DoB Tools.

## Skill-base e chance de sucesso

| Categoria do menu | Skill-base usada na consulta | Observação |
|---|---|---|
| Alchemy | Alchemy | Glassblowing também usa Alchemy como skill-base. |
| Blacksmithy | Blacksmith | Metais especiais têm curvas próprias. |
| Bowcraft | Fletching | A categoria pública é chamada Bowcraft. |
| Carpentry | Carpentry | Masonry usa Carpentry como skill-base. |
| Cartography | Cartography | O resultado depende do mapa escolhido. |
| Cooking | Cooking | Algumas receitas têm chance-base diferente. |
| Glassblowing | Alchemy | Exige Alchemy 100.0, aprendizado de Glassblowing e forge. |
| Inscription | Inscribe | A chance de craft não altera o dano mágico. |
| Masonry | Carpentry | Exige Carpentry 100.0 e aprendizado de Masonry. |
| Tailoring | Tailoring | Exceptional é uma rolagem separada. |
| Tinkering | Tinkering | DoB Tools usam curvas especiais. |

Para uma receita comum, o servidor parte da chance na skill mínima e avança até
100% na skill máxima. O controle usa a **skill base** informada pelo jogador e
não aplica bônus temporários de item, talisman, bancada ou ferramenta ativa. As
políticas especiais de DoB podem substituir essa curva linear.

Nesta prévia local, as tabelas e os controles estão deliberadamente limitados a
105.0 de skill. Quando a fonte oficial continua além desse ponto, a prévia não
extrapola a curva depois do corte.

## O que significa Exceptional

Chance de sucesso responde se o item será produzido. Exceptional é uma rolagem
de qualidade separada e só aparece quando a receita e a categoria permitem esse
resultado. Por isso, as páginas exibem essas informações em colunas distintas e
não somam os percentuais.

!!! info "Escopo da primeira organização"
    As páginas priorizam receitas especiais do DoB e referências práticas do
    catálogo nativo. Receitas não listadas continuam acessíveis no gump oficial;
    elas podem ser incorporadas gradualmente sem mudar os endereços desta seção.

!!! warning "Prévia local"
    Esta reorganização está na branch de trabalho para revisão visual. Nenhum
    commit, merge, push ou deploy acompanha esta prévia.
