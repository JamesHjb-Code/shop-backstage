INSERT INTO `menu`(`id`, `authName`, `path`, `icon`, `parentId`) VALUES (1, '首页', 'home', NULL, NULL);
INSERT INTO `menu`(`id`, `authName`, `path`, `icon`, `parentId`) VALUES (101, '商品管理', 'goods', NULL, NULL);
INSERT INTO `menu`(`id`, `authName`, `path`, `icon`, `parentId`) VALUES (102, '用户管理', 'user', NULL, NULL);
INSERT INTO `menu`(`id`, `authName`, `path`, `icon`, `parentId`) VALUES (103, '权限管理', 'authority', NULL, NULL);
INSERT INTO `menu`(`id`, `authName`, `path`, `icon`, `parentId`) VALUES (104, '数据统计', 'statistics', NULL, NULL);
INSERT INTO `menu`(`id`, `authName`, `path`, `icon`, `parentId`) VALUES (105, '订单管理', 'order', NULL, NULL);
INSERT INTO `menu`(`id`, `authName`, `path`, `icon`, `parentId`) VALUES (106, '商品列表', 'goods-list', NULL, 101);
INSERT INTO `menu`(`id`, `authName`, `path`, `icon`, `parentId`) VALUES (107, '用户列表', 'user-list', NULL, 102);
INSERT INTO `menu`(`id`, `authName`, `path`, `icon`, `parentId`) VALUES (108, '订单列表', 'order-list', NULL, 105);
INSERT INTO `menu`(`id`, `authName`, `path`, `icon`, `parentId`) VALUES (109, '角色列表', 'role-list', NULL, 103);
INSERT INTO `menu`(`id`, `authName`, `path`, `icon`, `parentId`) VALUES (110, '权限列表', 'authority-list', NULL, 103);
INSERT INTO `menu`(`id`, `authName`, `path`, `icon`, `parentId`) VALUES (111, '商品分类', 'goods-type', NULL, 101);
INSERT INTO `menu`(`id`, `authName`, `path`, `icon`, `parentId`) VALUES (112, '数据报表', 'data-report', NULL, 104);
