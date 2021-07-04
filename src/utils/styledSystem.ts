import styled from 'styled-components'
import {
    compose,
    space,
    color,
    layout,
    typography,
    flexbox,
    border,
    background,
    position,
    grid,
    shadow,
    width,
    minWidth,
    height,
    minHeight,
} from 'styled-system'


const styledSystem = (tag: string) => {
    return styled(tag: any)(
        compose(
            space,
            color,
            layout,
            typography,
            flexbox,
            border,
            background,
            position,
            grid,
            shadow,
            width,
            minWidth,
            height,
            minHeight,
        ),
    )
}

export default styledSystem


/** usecase
 *
 *
 *const Box = styledSystem(styled.div``)
 const Box2 = styledSystem(styled.div``)
 const Box3 = styledSystem(styled.div``)
 const Heading = styledSystem(styled.h1``)

 *
 * */


