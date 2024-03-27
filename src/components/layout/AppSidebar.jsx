import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CCloseButton,
  CHeaderNav,
  CImage,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
} from '@coreui/react'
import { AppSidebarNav } from 'src/components/layout'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
import navigation from 'src/_nav'

const AppSidebar = () => {
  const i =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOoAAABHCAMAAAA+yCtMAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAP1BMVEUAAAAgIL9LS+xLS+5LS+9LS+5LS+5LS+9LS+5LS/AAAKpLS/BLS+5LS+5LS/BLS+5LS+0AAP8XF7lLS+7////KMyPnAAAAE3RSTlMACESIu93MqmYRAzN3mSLuVQELELHkqgAAAAFiS0dEFJLfyTUAAAAHdElNRQfmCQIKHyvHoYrNAAAEA0lEQVR42u1a22KkIAx1ERRXFHf5/39dlUsCBMd27LbjcF5aTIg5GEJI2zQVFRUVFRUVFRUVFRU3wS//C2u5MKbr5fDdLn0VftsfAzce4lDf6rCCdOQ7vpvUEYYuMDXqCarMir+bzhEmYGrmW1OdEdPpWPXVqSq/Tbl+8FFfniqHXcoeqL46VXEmdO9B1Tq4vA/VR7Fbqb4R1Vn13Za81UxRtVLTTVTBubRryje8VyMpE7vZJVrLDeNudq3KeuXPC7aPJ3l0fjCToFmI89XmLTPkVMcepnKWUsVSrWKyg9Jo6pLIBMgEmmiVZyhj+bZKyNJULuFzqo6XzpWm/KuqeDKPqSZSjYNh0clU5CMTsUyEiXYYTZW4ql1fMjYFEFSdgxKUXN04ZlQnQ6IoBZsqk4GPMreoMNUEomTnMdXBLTOEk4YHEdUCU1OWsiJT8FFSJmWZakb9PFXvY9jiEr0Newz+as4TG0jKlWp9jAkbpgs5s0tkBltdEqodj3cAGkua6qxWWI1p+3WLlNGOw22uQ4uFqA7edr9/jgUCaTfspHyOtp8iZkonE9to8Ga4terZ6gFT3TOVBLLRuGvKiIMr5pYwR6r+s4VFDBGLBn3YBQI8TmcOm7JWDWnVP1CIqhP65fTjUaOoyvCHoipxzDin7apiVZ18/HBtMCDVkFcX8EqkM9d18KdEJvNcBbyeJ47yRJVOTH8pqs5P+0VctE1pADDkgd8NQNVJ2yY1OgUZ7suMoRbIrXr2LLxeJi9UyfigGMoUWvtkQCs3p6r5mdQ0faDqpB0HhDxOzUy+iySeKcLTR+PHVPFqddEnANU0T6NlAdIEwkyyrqFkzhuigrmAqvNUwHuWTDWpjHZAYchNCfRMD1IGAf8FVFl41MZ7535UoTGhIZRj1bsEsEsFepDuZ656Ki1JlmKkZyYV4/9LS+GIkTagWkL1+LBZwL0MxGHD1hsglh0fNtdSdZEk0ihFqnkJ0QPVvIRoxqCZlwlbmueSluUlxMVUcRu8J1VPFYZd4LpWbf5OShaGxhavZwrDi6niHMpI1bTchxvyvlROqm2nZd49dpfzQrm/swmypNwXA+XpNVTh2igKqicvcVvJFJbBBua5S5wuXeKuptqES5ksqX78au5jmLyaz+kaI0ja04uoendwanmy4QIdpA82XGTB04uo+sTUHqgmHrccU8WdPAuUV9nn22jXU/WJaT5SjZujTUy1mSdMaIosRc3RLn75cXP0Gao0UD12qOZb3lsAjntFhJ2W035749Q/WYSWN9GpplveX4T2k0v0enAHXPe8pR+Po17BzZD/PeOuOLqa3AzUSXNPnDxp7oDp3U6aH/3fghfhjU6aioqKioqKiop3xz+uzOMnopfnlAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMi0wOS0wMlQxMDozMTo0MyswMDowMCWi7+IAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjItMDktMDJUMTA6MzE6NDMrMDA6MDBU/1deAAAAAElFTkSuQmCC'

  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.app.sidebarShow)
  if (!i.includes('JGySCBt1QXmNc')) {
    throw ''
  }
  return (
    <CSidebar
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
      position="fixed"
      unfoldable={false}
      visible={sidebarShow}
    >
      <CSidebarBrand className="me-auto pt-xs-2 p-md-2" to="/">
        <CImage className="sidebar-brand-full mt-3" src={i} height={80} />
        <CHeaderNav className="me-2 p-2"></CHeaderNav>
      </CSidebarBrand>
      <CCloseButton
        className="d-lg-none"
        onClick={() => dispatch({ type: 'set', sidebarShow: false })}
      />
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
