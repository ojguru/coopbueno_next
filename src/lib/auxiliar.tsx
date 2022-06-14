import { MenusMenuItemEntity } from 'client'

export interface MenuItem {
  item: MenusMenuItemEntity
  children: MenusMenuItemEntity[]
}

const getHierarchicalItems = (data: MenusMenuItemEntity[] = []) => {
  const tree: MenuItem[] = []
  const childrenOf = {}
  data.forEach((item) => {
    const id = item.id
    const parentId = item.attributes?.parent?.data?.id

    childrenOf[id] = childrenOf[id] || []

    const newItem: MenuItem = {
      item: item,
      children: childrenOf[id],
    }

    parentId
      ? (childrenOf[parentId] = childrenOf[parentId] || []).push(newItem)
      : tree.push(newItem)
  })
  return tree
}

export { getHierarchicalItems }
