import {ADMIN_ROLE, ALL_ROLES} from "../../constant";

export const NAV_ITEM = [
    {id: 0, name: 'headerItem.item1', location: '/', role: ALL_ROLES},
    {id: 1, name: 'headerItem.item2', location: '/books', role: ALL_ROLES},
    {id: 2, name: 'headerItem.item6', location: '/users', role: ADMIN_ROLE},
    {id: 3, name: 'headerItem.item4', location: '/genre', role: ADMIN_ROLE},
    {id: 4, name: 'headerItem.item5', location: '/author', role: ADMIN_ROLE},
]