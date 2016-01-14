(function () {
    'use strict';

    angular
        .module('mmpadmin')
        .factory('apiSetting', apiSetting);

    var apiParam = {
        task: {
            v4: {
                addFolderMember: {
                    name: '添加项目成员 v4', docUrl: {type: '', url: ''},
                    url: '/task/v4/addFolderMember',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 't_folderID', isMust: true, type: 'string', des: '项目ID' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json或xml）,默认为xml格式' },
                        { key: 'members', isMust: false, type: 'string', des: '项目成员ID多个以，相隔' }
                    ]
                },
                applyFolderMember: {
                    name: '申请加入项目 v4', docUrl: {type: '', url: ''},
                    url: '/task/v4/applyFolderMember',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 't_folderID', isMust: true, type: 'string', des: '项目ID' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json或xml）,默认为xml格式' }
                    ]
                },
                editUserFolder: {
                    name: '更改个人项目文件夹状态(包括修改个人文件夹，置顶项目，折叠项目，设置成员类型，设置管理员) v4',
                    docUrl: {type: '', url: ''},
                    url: '/task/v4/editUserFolder',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 't_folderID', isMust: true, type: 'string', des: '项目ID' },
                        { key: 'fFileID', isMust: false, type: 'string', des: '项目文件夹ID(折叠项目值为1)' },
                        { key: 'isAdmin', isMust: false, type: 'string', des: '是否设置成管理员（0否1是）' },
                        { key: 'type', isMust: false, type: 'string', des: '项目成员类型（1项目成员2项目托付者4申请成为成员5拒绝申请成员）' },
                        { key: 'isTop', isMust: false, type: 'string', des: '项目是否设置置顶（0否1是）' },
                        { key: 'userID', isMust: false, type: 'string', des: '设置操作的成员ID' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json或xml）,默认为xml格式' }
                    ]
                },
                getFolderFiles: {
                    name: '获取个人文件夹项目列表 v4', docUrl: {type: '', url: ''},
                    url: '/task/v4/getFolderFiles',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json或xml）,默认为xml格式' }
                    ]
                },

                getAllFolders: {
                    name: '获取项目列表(新包含用户的操作权限和是否置顶等) v4',
                    docUrl: {type: '', url: ''},
                    url: '/task/v4/getAllFolders',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json或xml）,默认为xml格式' }
                    ]
                },
                editUserFile: {
                    name: '修改个人项目文件夹 v4',
                    docUrl: {type: '', url: ''},
                    url: '/task/v4/editUserFile',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'fFileID', isMust: true, type: 'string', des: '项目文件夹ID' },
                        { key: 'fFileName', isMust: true, type: 'string', des: '新项目文件夹名称' },
                        { key: 'sort', isMust: false, type: 'string', des: '更改个人项目文件夹排序序号(默认不做修改)' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json或xml）,默认为xml格式' }
                    ]
                },
                deleteUserFile: {
                    name: '删除个人项目文件夹 v4',
                    docUrl: {type: '', url: ''},
                    url: '/task/v4/deleteUserFile',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'fFileID', isMust: true, type: 'string', des: '项目文件夹ID' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json或xml）,默认为xml格式' }
                    ]
                },
                addUserFile: {
                    name: '创建个人项目文件夹 v4',
                    docUrl: {type: '', url: ''},
                    url: '/task/v4/addUserFile',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 't_folderID', isMust: true, type: 'string', des: '项目ID' },
                        { key: 'fFileName', isMust: true, type: 'string', des: '个人项目文件夹名称' },
                        { key: 'sort', isMust: false, type: 'string', des: '个人项目文件夹排序序号(默认为1)' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json或xml）,默认为xml格式' }
                    ]
                },
                editFolderArchived: {
                    name: '归档项目 v4',
                    docUrl: {type: '', url: ''},
                    url: '/task/v4/editFolderArchived',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 't_folderID', isMust: true, type: 'string', des: '项目ID' },
                        { key: 'isArchived', isMust: true, type: 'string', des: '是否归档项目：1:归档项目，2：取消归档' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json或xml）,默认为xml格式' }
                    ]
                },
                removeFolderMember: {
                    name: '退出项目或者移除成员 v4',
                    docUrl: {type: '', url: ''},
                    url: '/task/v4/removeFolderMember',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 't_folderID', isMust: true, type: 'string', des: '项目ID' },
                        { key: 'userID', isMust: false, type: 'string', des: '移除成员时需要传userID' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json或xml）,默认为xml格式' }
                    ]
                },
                getTopicListByTaskID: {
                    name: '根据任务ID获取任务的讨论列表 v4',
                    docUrl: {type: '', url: '/v4task_replyment.html'},
                    url: '/task/v4/getTopicListByTaskID',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 't_id', isMust: true, type: 'string', des: '任务ID' },
                        { key: 'max_id', isMust: false, type: 'string', des: '若指定此参数，则只返回ID比max_id小的动态更新（即比max_id发表时间早的任务讨论）' },
                        { key: 'is_onlyFile', isMust: false, type: 'int', des: '仅返回有附件的任务讨论，默认0：所有；1：仅返回有附件的任务讨论' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(默认20最大100)' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json或xml）,默认为xml格式' }
                    ]
                },
                filterTaskCount: {
                    name: '我负责的，我参与的，我托付的任务数和是否有新讨论 v4',
                    docUrl: {type: '', url: '/v4task_counts.html'},
                    url: '/task/v4/filterTaskCount',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'format', isMust: true, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                deleteFolderStage: {
                    name: '删除项目阶段 v4',
                    docUrl: {type: '', url: ''},
                    url: '/task/v4/deleteFolderStage',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 't_folderID', isMust: true, type: 'string', des: '项目ID' },
                        { key: 't_sid', isMust: true, type: 'string', des: '要删除的阶段ID' },
                        { key: 'format', isMust: true, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                getTaskParentsAndSubs: {
                    name: '根据任务ID获取该任务的母任务和子任务直线列表 v4',
                    docUrl: {type: '', url: '/v4task_parents.html'},
                    url: '/task/v4/getTaskParentsAndSubs',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 't_id', isMust: true, type: 'string', des: '任务ID' }
                    ]
                },

                addTask: {
                    name: '创建一个新的任务(主用于项目阶段下任务创建) v4', docUrl: {type: 'taskId', url: ''}, url: '/task/v4/addTask',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 't_title', isMust: true, type: 'string', des: '任务标题' },
                        { key: 't_parentID', isMust: false, type: 'string', des: '母任务ID(若t_parentID为空 则创建母任务)' },
                        { key: 't_des', isMust: false, type: 'string', des: '任务描述' },
                        { key: 't_ed', isMust: false, type: 'string', des: '任务截止日期，yyyy-MM-dd形式', isDate: true },
                        { key: 'u_id', isMust: false, type: 'string', des: '指定的任务负责人' },
                        { key: 't_mids', isMust: false, type: 'string', des: '指定的任务成员 (多个成员用逗号隔开)' },
                        { key: 't_folderID', isMust: false, type: 'string', des: '指定的隶属项目' },
                        { key: 'color', isMust: false, type: 'int', des: '任务颜色 默认0：无颜色；1：蓝色；2：紫色；3：红色；4：橙色；5：黄色' },
                        { key: 'p_id', isMust: false, type: 'string', des: '动态ID（创建任务时，如果需要某个动态的附件添加到任务中必传）' },
                        { key: 't_sid', isMust: false, type: 'string', des: '指定的隶属项目下的阶段ID' },
                        { key: 'isFavorite', isMust: false, type: 'int', des: '是否给项目标星（默认：0：否，1：是）' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                getFolderDetail: {
                    name: '根据项目ID或名称获取项目详情 v4',
                    docUrl: {type: '', url: '/v4folderDetail.html'},
                    url: '/task/v4/getFolderDetail',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 't_folderID', isMust: true, type: 'string', des: '项目ID' },
                        { key: 'name', isMust: false, type: 'string', des: '项目名称' }
                    ]
                },
                getFolderTaskList: {
                    name: '获取项目阶段任务列表 v4',
                    docUrl: {type: '', url: '/v4folderTasks.html'},
                    url: '/task/v4/getFolderTaskList',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 't_folderID', isMust: true, type: 'string', des: '项目ID (folderID=1 表示获取未关联项目的任务列表)' },
                        { key: 't_sid', isMust: false, type: 'string', des: '项目阶段ID（1为已完成）' },
                        { key: 'color', isMust: false, type: 'int', des: '任务颜色 默认0：无颜色；1：蓝色；2：紫色；3：红色；4：橙色；5：黄色' },
                        { key: 'status', isMust: false, type: 'int', des: '筛选任务状态 默认0：进行中；1：已完成' },
                        { key: 'categoryIDs', isMust: false, type: 'string', des: '过滤任务标签 多个用|隔开' },
                        { key: 'u_id', isMust: false, type: 'string', des: '指定用户编号 查看其他同事的任务列表' },
                        { key: 'pageindex', isMust: false, type: 'int64', des: '指定当前的页码（不指定页码返回所有）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(每个阶段下返回的任务条数) int默认值20，最大值100' },
                        { key: 'sort', isMust: false, type: 'int', des: '任务排序 4:按项目(查询结果结构有变化);5:任务负责人；8:完成时间；10:最近更新' },
                        { key: 'completeTime', isMust: false, type: 'string', des: '查询的时间起始点，当sort为8时(查询时间到当前的) 格式(2015-06-10)', isDate: true },
                        { key: 'keywords', isMust: false, type: 'int', des: '关键词模糊搜索' },
                        { key: 'filter_type', isMust: false, type: 'int', des: '过滤类型 默认0：全部；（后续开放：1：我参与的任务；2：我负责的任务；3：我托付的任务；8:自己加星的任务）' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式json' }

                    ]
                },
                editTaskStage: {
                    name: '修改任务的项目阶段 v4',
                    docUrl: {type: '', url: ''},
                    url: '/task/v4/editTaskStage',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 't_id', isMust: true, type: 'string', des: '任务ID' },
                        { key: 't_folderID', isMust: true, type: 'string', des: '项目ID' },
                        { key: 't_sid', isMust: true, type: 'string', des: '阶段ID(将任务调整到改项目阶段)' },
                        { key: 'format', isMust: true, type: 'string', des: '返回数据的格式json' }
                    ]
                },
                editFolderStage: {
                    name: '修改项目阶段 v4',
                    docUrl: {type: '', url: ''},
                    url: '/task/v4/editFolderStage',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 't_folderID', isMust: true, type: 'string', des: '项目ID' },
                        { key: 't_sid', isMust: true, type: 'string', des: '阶段ID(将任务调整到改项目阶段)' },
                        { key: 'sort', isMust: true, type: 'string', des: '阶段调整到第几个，顺序以1开始(默认顺序不调整)' },
                        { key: 'format', isMust: true, type: 'string', des: '返回数据的格式json' },
                        { key: 'stageName', isMust: false, type: 'string', des: '阶段名称' }
                    ]
                },
                getFolderStage: {
                    name: '  v4',
                    docUrl: {type: '', url: ''},
                    url: '/task/v4/getFolderStage',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 't_folderID', isMust: true, type: 'string', des: '项目ID' },
                        { key: 'format', isMust: true, type: 'string', des: '返回数据的格式json' }
                    ]
                },
                addFolderStage: {
                    name: '新增项目阶段 v4',
                    docUrl: {type: '', url: ''},
                    url: '/task/v4/addFolderStage',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 't_folderID', isMust: true, type: 'string', des: '项目ID' },
                        { key: 'stageName', isMust: true, type: 'string', des: '阶段名称' },
                        { key: 'sort', isMust: true, type: 'string', des: '阶段添加到第几个(默认添加到第一个)' },
                        { key: 'format', isMust: true, type: 'string', des: '返回数据的格式json' }

                    ]
                },
                getTaskActivityByTaskID: {
                    name: '获取任务日志 v4',
                    docUrl: {type: '', url: '/v4task_activity.html'},
                    url: '/task/v4/getTaskActivityByTaskID',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 't_id', isMust: true, type: 'string', des: '任务ID' },
                        { key: 'format', isMust: true, type: 'string', des: '返回数据的格式json' }

                    ]
                },
                editFolderOrTaskFavorite: {
                    name: '给任务标记星或取消 v4',
                    docUrl: {type: '', url: ''},
                    url: '/task/v4/editFolderOrTaskFavorite',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 't_id', isMust: true, type: 'string', des: '任务ID' },
                        { key: 'isFavorite', isMust: true, type: 'int', des: '1:标记星，0：取消标记' },
                        { key: 'format', isMust: true, type: 'string', des: '返回数据的格式json' }

                    ]
                },

                getFolders: {
                    name: '获取项目列表 v4',
                    docUrl: {type: '', url: '/v4folderList.html'},
                    url: '/task/v4/getFolders',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索' },
                        { key: 'filter_type', isMust: false, type: 'int', des: '过滤类型 0:全部项目 1:我参与 2：我负责 3：我托付 4：与我协作的 默认：全部' },
                        { key: 'sort', isMust: false, type: 'int', des: '筛选：1:星标 2:创建日期 3:负责人 4:颜色 5:A-Z 默认1' },
                        { key: 'format', isMust: true, type: 'string', des: '返回数据的格式json' }

                    ]
                },

                editFolderInfo: {
                    name: '根据项目ID编辑项目 v4',
                    docUrl: {type: '', url: ''},
                    url: '/task/v4/editFolderInfo',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 't_folderID', isMust: true, type: 'string', des: '项目ID' },
                        { key: 'name', isMust: false, type: 'string', des: '项目名称' },
                        { key: 'chargeUserID', isMust: false, type: 'string', des: '项目负责人ID' },
                        { key: 'isFavorite', isMust: false, type: 'int', des: '是否给项目标星（默认：0：否，1：是）' },
                        { key: 'members', isMust: false, type: 'string', des: '项目成员ID多个以，相隔(后台判断（跟原项目成员相比，如果原没有新有则认为是添加，如果原有新没有则认为是移除）)' },
                        { key: 'deadline', isMust: false, type: 'datetime', des: '项目截止日期' },
                        { key: 'admins', isMust: false, type: 'string', des: '项目管理员ID多个以，相隔' },
                        { key: 'visibility', isMust: false, type: 'string', des: '项目可见性 0私密 1公开仅群组 2全公司(默认0)' },
                        { key: 'groupIDs', isMust: false, type: 'string', des: '当项目可见性为公开群组时群组ID（多个群组已，相隔）' },
                        { key: 'isTop', isMust: false, type: 'int', des: '是否置顶（默认：0：否，1：是）' },
                        { key: 'fFileID', isMust: false, type: 'string', des: '修改项目文件夹' },
                        { key: 'format', isMust: true, type: 'string', des: '返回数据的格式json' }
                    ]
                },

                addFolder: {
                    name: '创建一个新的项目 v4',
                    docUrl: {type: '', url: ''},
                    url: '/task/v4/addFolder',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'name', isMust: true, type: 'string', des: '项目名称' },
                        { key: 'chargeUserID', isMust: false, type: 'string', des: '项目负责人 默认当前登录用户' },
                        { key: 'deadline', isMust: false, type: 'datetime', des: '项目截止日期' },
                        { key: 'isFavorite', isMust: false, type: 'int', des: '是否给项目标星（默认：0：否，1：是）' },
                        { key: 'members', isMust: false, type: 'string', des: '项目成员ID多个以，相隔(后台判断（跟原项目成员相比，如果原没有新有则认为是添加，如果原有新没有则认为是移除）)' },
                        { key: 'admins', isMust: false, type: 'string', des: '项目管理员ID多个以，相隔' },
                        { key: 'visibility', isMust: false, type: 'string', des: '项目可见性 0私密 1公开仅群组 2全公司(默认0)' },
                        { key: 'groupIDs', isMust: false, type: 'string', des: '当项目可见性为公开群组时群组ID（多个群组已，相隔）' },
                        { key: 'fFileID', isMust: false, type: 'string', des: '项目文件夹ID' },
                        { key: 'isTop', isMust: false, type: 'int', des: '是否置顶（默认：0：否，1：是）' },
                        { key: 'format', isMust: true, type: 'string', des: '返回数据的格式json' }

                    ]
                },
                getSubTasks: {
                    name: '根据母任务ID获取当前登录用户的子任务列表 v4',
                    docUrl: {type: '', url: '/v4sub_task_v2.html'},
                    url: '/task/v4/getSubTasks',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 't_parentID', isMust: true, type: 'string', des: '母任务ID' },
                        { key: 'pageindex', isMust: false, type: 'int64', des: '指定当前的页码（不指定页码返回所有）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(默认值20，最大值100)' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式json' }

                    ]
                },
                getTaskList: {
                    name: '获取任务列表 v4',
                    docUrl: {type: '', url: '/v4task_v2.html'},
                    url: '/task/v4/getTaskList',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索' },
                        { key: 't_folderID', isMust: false, type: 'string', des: '项目ID (folderID=1 表示获取未关联项目的任务列表)' },
                        { key: 'filter_type', isMust: false, type: 'int', des: '过滤类型 默认1：我参与的任务；2：我负责的任务；3：我托付的任务；7：查看同事(与我协作的任务)；8:自己加星的任务' },
                        { key: 'color', isMust: false, type: 'int', des: '任务颜色 默认-1：全部；0：无颜色；1：蓝色；2：紫色；3：红色；4：橙色；5：黄色' },
                        { key: 'status', isMust: false, type: 'int', des: '筛选任务状态 默认0：进行中；1：已完成；-1：全部' },
                        { key: 'categoryIDs', isMust: false, type: 'string', des: '过滤任务标签 多个用|隔开' },
                        { key: 'u_id', isMust: false, type: 'string', des: '指定用户编号 查看其他同事的任务列表' },
                        { key: 'pageindex', isMust: false, type: 'int64', des: '指定当前的页码（不指定页码返回所有）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(默认值20，最大值100)' },
                        { key: 'sort', isMust: false, type: 'int', des: '任务排序 1：按首字母;2:按到期日期;3:按任务创建时间；4:按项目(查询结果结构有变化);5:任务负责人；7：按颜色；8:完成时间；9:进行中;10:最近更新' },
                        { key: 'completeTime', isMust: false, type: 'int', des: '查询的时间起始点，当sort为8时(查询时间到当前的) 格式(2015-06-10)' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式json' }

                    ]
                },
                editFolderVisbility: {
                    name: '修改项目可见性 v4',
                    docUrl: {type: '', url: ''},
                    url: '/task/v4/editFolderVisibility',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'folderID', isMust: true, type: 'string', des: '项目ID' },
                        { key: 'visibility', isMust: true, type: 'int', des: '项目可见性  0私密  1公开仅群组  2全公司' },
                        { key: 'groupIDs', isMust: false, type: 'string', des: '当项目可见性为公开群组时群组ID（多个群组已，相隔）' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式json' }
                    ]
                },
                getTaskDetail: {
                    name: '根据任务ID获取当前登录用户的任务详情 v4',
                    docUrl: {type: '', url: '/v2task_detail_v2.html'},
                    url: '/task/v4/getTaskDetail',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 't_id', isMust: true, type: 'string', des: '任务ID' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json)' }
                    ]
                },
                getTaskSubTasks: {
                    name: '根据任务ID获取子任务 v4',
                    docUrl: {type: '', url: '/v2task_detail_v2.html'},
                    url: '/task/v4/getTaskSubTasks',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 't_id', isMust: true, type: 'string', des: '任务ID' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json)' }
                    ]
                }

            },
            v2: {
                deleteFolder: {
                    name: '根据项目ID删除项目 v2', docUrl: {type: '', url: ''},
                    url: '/task/v2/deleteFolder',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 't_folderID', isMust: true, type: 'string', des: '项目ID' },
                        { key: 'is_deleteTask', isMust: false, type: 'int', des: '是否删除项目中的任务 默认0：不删除；1：删除'},
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json或xml）' }

                    ]
                },
                editFolderInfo: {
                    name: '根据项目ID编辑项目 v2',
                    docUrl: {type: '', url: ''},
                    url: '/task/v2/editFolderInfo',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 't_folderID', isMust: true, type: 'string', des: '项目ID' },
                        { key: 'name', isMust: false, type: 'string', des: '项目名称' },
                        { key: 'chargeUserID', isMust: false, type: 'string', des: '项目负责人ID' },
                        { key: 'color', isMust: false, type: 'int', des: '项目颜色 0：无颜色；1：蓝色；2：紫色；3：红色；4：橙色；5：黄色' },
                        { key: 'deadline', isMust: false, type: 'datetime', des: '项目截止日期' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式json' }
                    ]
                },
                editFolderColor: {
                    name: '根据项目ID编辑项目的颜色 v2',
                    docUrl: {type: '', url: ''},
                    url: '/task/v2/editFolderColor',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 't_folderID', isMust: true, type: 'string', des: '项目ID' },
                        { key: 'color', isMust: true, type: 'int', des: '项目颜色 0：无颜色；1：蓝色；2：紫色；3：红色；4：橙色；5：黄色' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式json' }
                    ]
                },
                applyTaskMember: {
                    name: '根据任务ID申请为任务成员 v2',
                    docUrl: {type: '', url: ''},
                    url: '/task/v2/applyTaskMember',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 't_id', isMust: true, type: 'string', des: '任务ID' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式json' }
                    ]
                },
                isAgreeMember: {
                    name: '是否审核用户加入任务 v2',
                    docUrl: {type: '', url: ''},
                    url: '/task/v2/isAgreeMember',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 't_id', isMust: true, type: 'string', des: '任务ID' },
                        { key: 'u_id', isMust: true, type: 'string', des: '待审批的用户ID' },
                        { key: 'is_agree', isMust: false, type: 'int', des: '是否审批用户加入任务 默认0：拒绝；1：审批通过' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式json' }
                    ]
                },
                editUserNotice: {
                    name: '根据任务ID编辑当前登录用户是否接受任务讨论提醒 v2',
                    docUrl: {type: '', url: ''},
                    url: '/task/v2/editUserNotice',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 't_id', isMust: true, type: 'string', des: '任务ID' },
                        { key: 'notice', isMust: true, type: 'int', des: '用户是否接受任务讨论提醒 0：不接受；1：接受' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式json' }
                    ]
                },
                editTaskParent: {
                    name: '根据任务ID编辑任务的隶属母任务 v2',
                    docUrl: {type: '', url: ''},
                    url: '/task/v2/editTaskParent',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 't_id', isMust: true, type: 'string', des: '任务ID' },
                        { key: 't_parentID', isMust: false, type: 'int', des: '隶属母任务ID 为空则将此任务的隶属母任务除掉' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式json' }
                    ]
                },
                editTaskLockState: {
                    name: '根据任务ID编辑任务的锁定状态 v2',
                    docUrl: {type: '', url: ''},
                    url: '/task/v2/editTaskLockState',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 't_id', isMust: true, type: 'string', des: '任务ID' },
                        { key: 'stateLock', isMust: true, type: 'int', des: '锁定状态 0：未锁定；1：锁定' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式json' }
                    ]
                },
                editTaskColor: {
                    name: '据任务ID编辑任务颜色 v2',
                    docUrl: {type: '', url: ''},
                    url: '/task/v2/editTaskColor',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 't_id', isMust: true, type: 'string', des: '任务ID' },
                        { key: 'color', isMust: true, type: 'int', des: '任务颜色 0：无颜色；1：蓝色；2：紫色；3：红色；4：橙色；5：黄色' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式json' }
                    ]
                },
                addTask: {
                    name: '创建一个新的任务  v2',
                    docUrl: {type: 'taskId', url: ''},
                    url: '/task/v2/addTask',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 't_title', isMust: true, type: 'string', des: '任务标题' },
                        { key: 't_parentID', isMust: false, type: 'string', des: '母任务ID(若t_parentID为空 则创建母任务)' },
                        { key: 't_des', isMust: false, type: 'string', des: '任务描述' },
                        { key: 't_ed', isMust: false, type: 'string', des: '任务截止日期，yyyy-MM-dd形式' },
                        { key: 'u_id', isMust: false, type: 'string', des: '指定的任务负责人' },
                        { key: 't_mids', isMust: false, type: 'string', des: '指定的任务成员 (多个成员用逗号隔开)' },
                        { key: 't_folderID', isMust: false, type: 'string', des: '指定的隶属项目' },
                        { key: 'color', isMust: false, type: 'int', des: '任务颜色 默认0：无颜色；1：蓝色；2：紫色；3：红色；4：橙色；5：黄色' },
                        { key: 'p_id', isMust: false, type: 'string', des: '动态ID（创建任务时，如果需要某个动态的附件添加到任务中必传）' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                addFolder: {
                    name: '创建一个新的任务隶属的项目 v2',
                    docUrl: {type: 'folderId', url: ''},
                    url: '/task/v2/addFolder',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'name', isMust: true, type: 'string', des: '项目名称' },
                        { key: 'chargeUserID', isMust: false, type: 'string', des: '项目负责人 默认当前登录用户' },
                        { key: 'deadline', isMust: false, type: 'datetime', des: '项目截止日期' },
                        { key: 'color', isMust: false, type: 'int', des: '项目颜色 默认0：无颜色；1：蓝色；2：紫色；3：红色；4：橙色；5：黄色' },
                        { key: 'format', isMust: true, type: 'string', des: '返回数据的格式json' }
                    ]
                },
                validateFolder: {
                    name: '验证项目是否已经存在 v2',
                    docUrl: {type: '', url: ''},
                    url: '/task/v2/validateFolder',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'name', isMust: true, type: 'string', des: '项目名称' },
                        { key: 'format', isMust: true, type: 'string', des: '返回数据的格式json' }
                    ]
                },
                getAllTaskMessage: {
                    name: '获取任务消息  v2',
                    docUrl: {type: '', url: '/v2task_message.html'},
                    url: '/task/v2/getAllTaskMessage',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索' },
                        { key: 'msg_type', isMust: false, type: 'int', des: '任务信息类型 默认：0所有；1：任务提醒；2：回复我的；3：提到我的' },
                        { key: 'is_favorite', isMust: false, type: 'int32', des: '是否标记 默认：0所有；1：已经标记' },
                        { key: 'is_unread', isMust: false, type: 'int32', des: '是否未读 默认0：所有；1：未读' },
                        { key: 'pageindex', isMust: false, type: 'int64', des: '指定当前的页码（不指定页码返回所有）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(默认值20，最大值100)' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式json' }
                    ]
                },
                getTasksByKeywordsAndID: {
                    name: '根据任务ID获取任务可做关联的母任务列表  v2',
                    docUrl: {type: '', url: '/v2task_v2.html'},
                    url: '/task/v2/getTasksByKeywordsAndID',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 't_id', isMust: true, type: 'int', des: '任务ID' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式json' }
                    ]
                },
                getSubTasks: {
                    name: '根据母任务ID获取当前登录用户的子任务列表 v2',
                    docUrl: {type: '', url: '/v2sub_task_v2.html'},
                    url: '/task/v2/getSubTasks',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 't_parentID', isMust: true, type: 'string', des: '母任务ID' },
                        { key: 'pageindex', isMust: false, type: 'int64', des: '指定当前的页码（不指定页码返回所有）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(默认值20，最大值100)' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式json' }

                    ]
                },
                getTaskList: {
                    name: '获取当前登录用户隶属的任务列表 v2',
                    docUrl: {type: '', url: '/v2task_v2.html'},
                    url: '/task/v2/getTaskList',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索' },
                        { key: 't_folderID', isMust: false, type: 'string', des: '项目ID (folderID=1 表示获取未关联项目的任务列表)' },
                        { key: 'filter_type', isMust: false, type: 'int', des: '过滤类型 默认1：我参与的任务；2：我负责的任务；3：我托付的任务；7：查看同事(与我协作的任务)；8:自己加星的任务' },
                        { key: 'color', isMust: false, type: 'int', des: '任务颜色 默认-1：全部；0：无颜色；1：蓝色；2：紫色；3：红色；4：橙色；5：黄色' },
                        { key: 'status', isMust: false, type: 'int', des: '筛选任务状态 默认0：进行中；1：已完成；-1：全部' },
                        { key: 'categoryIDs', isMust: false, type: 'string', des: '过滤任务标签 多个用|隔开' },
                        { key: 'u_id', isMust: false, type: 'string', des: '指定用户编号 查看其他同事的任务列表' },
                        { key: 'pageindex', isMust: false, type: 'int64', des: '指定当前的页码（不指定页码返回所有）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(默认值20，最大值100)' },
                        { key: 'sort', isMust: false, type: 'int', des: '任务排序 1：按首字母;2:按到期日期;3:按任务创建时间；4:按项目(查询结果结构有变化);5:任务负责人；7：按颜色；8:完成时间；9:进行中;10:最近更新' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式json' }

                    ]
                },
                getFolders: {
                    name: '获取当前登录用户所有任务隶属的项目 v2',
                    docUrl: {type: '', url: '/v2folder_detail.html'},
                    url: '/task/v2/getFolders',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索' },
                        { key: 'filter_type', isMust: false, type: 'int', des: '过滤类型 0:全部项目 1:我参与 2：我负责 3：我托付 4：与我协作的 默认：全部' },
                        { key: 'color', isMust: false, type: 'int', des: '项目颜色 默认-1：全部；0：无颜色；1：蓝色；2：紫色；3：红色；4：橙色；5：黄色' },
                        { key: 'order_type', isMust: false, type: 'int', des: '项目排序方式 默认0：按最新更新排序；1：按到期日期排序；2：按创建日期排序' },
                        { key: 'is_showEmptyFolder', isMust: false, type: 'int', des: '是否显示无任务的项目 默认0：不显示；1：显示' },
                        { key: 'is_showCompletedFolder', isMust: false, type: 'int', des: '是否显示已完成的项目 默认0：不显示；1：显示' },
                        { key: 'pageindex', isMust: false, type: 'int', des: '指定当前的页码（不指定页码返回所有）' },
                        { key: 'pagesize', isMust: false, type: 'int64', des: '指定要返回的记录条数(默认值20，最大值100)' },
                        { key: 'format', isMust: true, type: 'string', des: '返回数据的格式json' }

                    ]
                },
                getTopicListByTaskID: {
                    name: '根据任务ID获取任务的讨论列表 v2',
                    docUrl: {type: '', url: '/v2task_replyment.html'},
                    url: '/task/v2/getTopicListByTaskID',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 't_id', isMust: true, type: 'string', des: '任务ID' },
                        { key: 'max_id', isMust: false, type: 'string', des: '若指定此参数，则只返回ID比max_id小的动态更新（即比max_id发表时间早的任务讨论）' },
                        { key: 'is_onlyFile', isMust: false, type: 'int', des: '仅返回有附件的任务讨论，默认0：所有；1：仅返回有附件的任务讨论' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(默认20最大100)' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json或xml）,默认为xml格式' }
                    ]
                },
                getTaskDetail: {
                    name: '根据任务ID获取当前登录用户的任务详情 v2',
                    docUrl: {type: '', url: '/v2task_detail_v2.html'},
                    url: '/task/v2/getTaskDetail',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 't_id', isMust: true, type: 'string', des: '任务ID' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json或xml）,默认为xml格式' }
                    ]
                }
            },
            v3: {
                getTopicListByTaskID: {
                    name: '根据任务ID获取任务的讨论列表 v3',
                    docUrl: {type: '', url: '/v3task_replyment_v2.html'},
                    url: '/task/v3/getTopicListByTaskID',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 't_id', isMust: true, type: 'string', des: '任务ID' },
                        { key: 'max_id', isMust: false, type: 'string', des: '若指定此参数，则只返回ID比max_id小的动态更新（即比max_id发表时间早的任务讨论）' },
                        { key: 'is_onlyFile', isMust: false, type: 'int', des: '仅返回有附件的任务讨论，默认0：所有；1：仅返回有附件的任务讨论' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(默认20最大100)' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json或xml）,默认为xml格式' }
                    ]
                },
                getAllTaskMessage: {
                    name: '获取任务消息  v3',
                    docUrl: {type: '', url: '/v3task_message_v2.html'},
                    url: '/task/v3/getAllTaskMessage',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索' },
                        { key: 'msg_type', isMust: false, type: 'int', des: '任务信息类型 默认：0所有；1：任务提醒；2：回复我的；3：提到我的' },
                        { key: 'is_favorite', isMust: false, type: 'int32', des: '是否标记 默认：0所有；1：已经标记' },
                        { key: 'is_unread', isMust: false, type: 'int32', des: '是否未读 默认0：所有；1：未读' },
                        { key: 'pageindex', isMust: false, type: 'int64', des: '指定当前的页码（不指定页码返回所有）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(默认值20，最大值100)' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式json' }
                    ]
                }
            },
            v1: {
                get_taskTree: {
                    name: '根据项目编号获取项目下的所有任务',
                    docUrl: {type: '', url: '/v1sub_task_v2.html'},
                    url: '/task/get_taskTree',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'f_id', isMust: true, type: 'string', des: '项目编号' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                duplicate_task: {
                    name: '复制一个任务',
                    docUrl: {type: '', url: ''},
                    url: '/task/duplicate_task',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 't_id', isMust: true, type: 'string', des: '任务编号' },
                        { key: 'u_id', isMust: true, type: 'string', des: '任务负责人 默认复制任务负责人' },
                        { key: 'title', isMust: true, type: 'string', des: '项目标题 默认复制任务标题' },
                        { key: 'is_taskdesc', isMust: false, type: 'int', des: '是否同步复制任务描述 0：不是；1：是 默认1' },
                        { key: 'is_folderID', isMust: false, type: 'int', des: '是否同步复制所属项目 0：不是；1：是 默认1' },
                        { key: 'is_members', isMust: false, type: 'int', des: '是否同步复制任务成员 0：不是；1：是 默认1' },
                        { key: 'is_observers', isMust: false, type: 'int', des: '是否同步复制旁观成员 0：不是；1：是 默认1' },
                        { key: 'is_deadline', isMust: false, type: 'int', des: '是否同步复制任务到期日期 0：不是；1：是 默认1' },
                        { key: 'is_subtask', isMust: false, type: 'int', des: '是否同步复制子任务 0：不是；1：是 默认1' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                add_topic_bypost: {
                    name: '将动态加入已有任务',
                    docUrl: {type: '', url: ''},
                    url: '/task/add_topic_bypost',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 't_id', isMust: true, type: 'string', des: '任务编号' },
                        { key: 'p_id', isMust: true, type: 'int', des: '要加入的动态ID' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                edit_priority: {
                    name: '根据任务编号编辑任务的重要性',
                    docUrl: {type: '', url: ''},
                    url: '/task/edit_priority',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 't_id', isMust: true, type: 'string', des: '任务编号' },
                        { key: 'priority', isMust: false, type: 'int', des: '任务是否重要性 0：不重要；1：重要 默认1' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                delete_topic: {
                    name: '根据回复编号删除任务回复',
                    docUrl: {type: '', url: ''},
                    url: '/task/delete_topic',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 't_id', isMust: true, type: 'string', des: '任务编号' },
                        { key: 'r_id', isMust: true, type: 'string', des: '任务回复编号' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                delete: {
                    name: '根据任务编号删除任务',
                    docUrl: {type: '', url: ''},
                    url: '/task/delete',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 't_id', isMust: true, type: 'string', des: '任务编号' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                addreply: {
                    name: '增加一个任务的讨论',
                    docUrl: {type: 'replyment', url: ''},
                    url: '/task/addreply',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 't_id', isMust: true, type: 'string', des: '任务编号' },
                        { key: 'r_id', isMust: false, type: 'string', des: '讨论编号（可以对别人的讨论进行回复）[可选]' },
                        { key: 'f_type', isMust: false, type: 'int', des: '可为空，0：表示上传图片；1：表示上传文档' },
                        { key: 'r_msg', isMust: false, type: 'string', des: '讨论的消息内容' },
                        { key: 'r_img', isMust: false, type: 'binary', des: '要上传的图片。仅支持JPEG,GIF,PNG图片,目前上传图片大小限制为<5M' },
                        { key: 'r_doc', isMust: false, type: 'binary', des: '文档仅支持DOC,PDF,XLS,PPT,TXT,压缩包,目前上传文件大小限制为<50M' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                unfinish: {
                    name: '根据任务编号标记任务未完成',
                    docUrl: {type: '', url: ''},
                    url: '/task/unfinish',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 't_id', isMust: true, type: 'string', des: '任务编号' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                finish: {
                    name: '根据任务编号标记任务完成',
                    docUrl: {type: '', url: ''},
                    url: '/task/finish',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 't_id', isMust: true, type: 'string', des: '任务编号' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                delete_member: {
                    name: '移除一个任务的成员',
                    docUrl: {type: '', url: ''},
                    url: '/task/delete_member',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 't_id', isMust: true, type: 'string', des: '任务编号' },
                        { key: 'u_id', isMust: true, type: 'string', des: '任务成员编号' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                add_member: {
                    name: '增加一个任务的成员',
                    docUrl: {type: '', url: ''},
                    url: '/task/add_member',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 't_id', isMust: true, type: 'string', des: '任务编号' },
                        { key: 'u_id', isMust: true, type: 'string', des: '任务成员编号' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                edit_project: {
                    name: '根据任务编号修改任务的隶属的项目',
                    docUrl: {type: '', url: ''},
                    url: '/task/edit_project',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 't_id', isMust: true, type: 'string', des: '任务编号' },
                        { key: 'p_id', isMust: false, type: 'string', des: '隶属的项目编号(*p_id为空时 即任务独立于隶属的项目)' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                edit_expiredate: {
                    name: '根据任务编号修改任务的到期日期',
                    docUrl: {type: '', url: ''},
                    url: '/task/edit_expiredate',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 't_id', isMust: true, type: 'string', des: '任务编号' },
                        { key: 'expiredate', isMust: true, type: 'string', des: '任务到期日期（可以为空）' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                edit_charge: {
                    name: '根据任务编号修改任务的负责人',
                    docUrl: {type: '', url: ''},
                    url: '/task/edit_charge',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 't_id', isMust: true, type: 'string', des: '任务编号' },
                        { key: 'u_id', isMust: true, type: 'string', des: '任务成员编号' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                edit_des: {
                    name: '根据任务编号修改任务的描述',
                    docUrl: {type: '', url: ''},
                    url: '/task/edit_des',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 't_id', isMust: true, type: 'string', des: '任务编号' },
                        { key: 'des', isMust: false, type: 'string', des: '任务描述' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                edit_title: {
                    name: '根据任务编号修改任务标题',
                    docUrl: {type: '', url: ''},
                    url: '/task/edit_title',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 't_id', isMust: true, type: 'string', des: '任务编号' },
                        { key: 't_title', isMust: true, type: 'string', des: '任务标题' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                edit_folder: {
                    name: '根据项目编号编辑任务项目',
                    docUrl: {type: '', url: ''},
                    url: '/task/edit_folder',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'f_id', isMust: true, type: 'string', des: '项目编号' },
                        { key: 'name', isMust: true, type: 'string', des: '项目名称 （*项目名称要保持唯一性）' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                create: {
                    name: '根据项目编号编辑任务项目',
                    docUrl: {type: 'task', url: ''},
                    url: '/task/create',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 't_title', isMust: true, type: 'string', des: '任务标题' },
                        { key: 't_parentID', isMust: false, type: 'string', des: '母任务ID(若t_parentID为空 则创建母任务)' },
                        { key: 't_des', isMust: false, type: 'string', des: '任务描述' },
                        { key: 't_ed', isMust: false, type: 'string', des: '任务截止日期，yyyy-MM-dd形式' },
                        { key: 'u_id', isMust: false, type: 'string', des: '指定的任务负责人' },
                        { key: 't_mids', isMust: false, type: 'string', des: '指定的任务成员 (多个成员用逗号隔开)' },
                        { key: 't_pid', isMust: false, type: 'string', des: '指定的隶属项目' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                reply: {
                    name: '根据任务编号获取单条任务的讨论列表信息',
                    docUrl: {type: '', url: '/v1task_replyment.html'},
                    url: '/task/reply',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 't_id', isMust: true, type: 'string', des: '任务标题' },
                        { key: 'max_id', isMust: false, type: 'string', des: '若指定此参数，则只返回ID比max_id小的动态更新（即比max_id发表时间早的动态更新）' },
                        { key: 'is_my_related', isMust: false, type: 'int32', des: '提到与回复我的讨论，默认0：所有；1：只返回提到与回复我的讨论' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(默认值20，最大值100)' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                detail: {
                    name: '根据任务编号获取单条任务的讨论列表信息',
                    docUrl: {type: '', url: '/v1task_detail.html'},
                    url: '/task/detail',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 't_id', isMust: true, type: 'string', des: '任务标题' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                project: {
                    name: '获取当前网络所有任务隶属的项目',
                    docUrl: {type: '', url: '/v1task_project.html'},
                    url: '/task/project',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                taskListByFolderID: {
                    name: '根据项目编号获取任务列表',
                    docUrl: {type: '', url: '/v1task.html'},
                    url: '/task/taskListByFolderID',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'folderID', isMust: true, type: 'string', des: '任务项目ID' },
                        { key: 'filterType', isMust: false, type: 'int', des: '任务列表筛选。默认值1，1表示我参与的任务；2表示我负责的任务；3表示我托付的任务' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                }
            }
        },
        post: {
            v1: {
                all: {
                    name: '', docUrl: {type: '', url: ''}, url: '/post/all',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索，当为空时则返回所有的动态更新' },
                        { key: 'post_type', isMust: false, type: 'int', des: '筛选动态更新类型,默认-1：表示全部动态；0：普通消息；1：链接；2：图片；3：文档；4：提问；7：投票；8：视频' },
                        { key: 'since_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比since_id大的动态更新（即比since_id发表时间晚的动态更新）' },
                        { key: 'max_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比max_id小的动态更新（即比max_id发表时间早的动态更新）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(int默认值20，最大值100)' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                my: {
                    name: '', docUrl: {type: '', url: ''}, url: '/post/my',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索，当为空时则返回所有的动态更新' },
                        { key: 'post_type', isMust: false, type: 'int', des: '筛选动态更新类型,默认-1：表示全部动态；0：普通消息；1：链接；2：图片；3：文档；4：提问；7：投票；8：视频' },
                        { key: 'max_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比max_id小的动态更新（即比max_id发表时间早的动态更新）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(int默认值20，最大值100)' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                atme_2: {
                    name: '', docUrl: {type: '', url: ''}, url: '/post/atme_2',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'isUnreading', isMust: false, type: 'int', des: '是否获取未读提及我的动态 默认0：否' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索，当为空时则返回所有的动态更新' },
                        { key: 'post_type', isMust: false, type: 'int', des: '筛选动态更新类型,默认-1：表示全部动态；0：普通消息；1：链接；2：图片；3：文档；4：提问；7：投票；8：视频' },
                        { key: 'pageindex', isMust: false, type: 'int64', des: '指定当前的页码' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(int默认值20，最大值100)' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                replybyme: {
                    name: '', docUrl: {type: '', url: ''}, url: '/post/replybyme',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索，当为空时则返回所有的动态更新' },
                        { key: 'max_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比max_id小的动态更新（即比max_id发表时间早的动态更新）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(int默认值20，最大值100)' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                replyme: {
                    name: '', docUrl: {type: '', url: ''}, url: '/post/replyme',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索，当为空时则返回所有的动态更新' },
                        { key: 'max_id', isMust: false, type: 'string', des: '若指定此参数，则只返回ID比max_id小的动态更新（即比max_id发表时间早的动态更新）(特殊，数据库内部处理)' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(int默认值20，最大值100)' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                favorite: {
                    name: '', docUrl: {type: '', url: ''}, url: '/post/favorite',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索，当为空时则返回所有的动态更新' },
                        { key: 'post_type', isMust: false, type: 'int', des: '筛选动态更新类型,默认-1：表示全部动态；0：普通消息；1：链接；2：图片；3：文档；4：提问；7：投票；8：视频' },
                        { key: 'since_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比since_id大的动态更新（即比since_id发表时间晚的动态更新）' },
                        { key: 'max_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比max_id小的动态更新（即比max_id发表时间早的动态更新）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(int默认值20，最大值100)' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                group: {
                    name: '', docUrl: {type: '', url: ''}, url: '/post/group',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索，当为空时则返回所有的动态更新' },
                        { key: 'g_id', isMust: true, type: 'string', des: '群组编号' },
                        { key: 'max_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比max_id小的动态更新（即比max_id发表时间早的动态更新）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(int默认值20，最大值100)' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                user: {
                    name: '', docUrl: {type: '', url: ''}, url: '/post/user',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'u_id', isMust: true, type: 'string', des: '用户编号' },
                        { key: 'max_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比max_id小的动态更新（即比max_id发表时间早的动态更新）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(int默认值20，最大值100)' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                doc: {
                    name: '', docUrl: {type: '', url: ''}, url: '/post/doc',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'g_id', isMust: false, type: 'string', des: '群组编号' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索，当为空时则返回所有的动态更新' },
                        { key: 'filter_type', isMust: false, type: 'int', des: '过滤类型。默认值0，0表示所有；1表示我上传的；2表示我收藏的' },
                        { key: 'since_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比since_id大的动态更新（即比since_id发表时间晚的动态更新）' },
                        { key: 'max_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比max_id小的动态更新（即比max_id发表时间早的动态更新）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(int默认值20，最大值100)' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                img: {
                    name: '', docUrl: {type: '', url: ''}, url: '/post/img',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'g_id', isMust: false, type: 'string', des: '群组编号' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索，当为空时则返回所有的动态更新' },
                        { key: 'filter_type', isMust: false, type: 'int', des: '过滤类型。默认值0，0表示所有；1表示我上传的；2表示我收藏的' },
                        { key: 'since_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比since_id大的动态更新（即比since_id发表时间晚的动态更新）' },
                        { key: 'max_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比max_id小的动态更新（即比max_id发表时间早的动态更新）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(int默认值20，最大值100)' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                video: {
                    name: '', docUrl: {type: '', url: ''}, url: '/post/video',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'g_id', isMust: false, type: 'string', des: '群组编号' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索，当为空时则返回所有的动态更新' },
                        { key: 'filter_type', isMust: false, type: 'int', des: '过滤类型。默认值0，0表示所有；1表示我上传的；2表示我收藏的' },
                        { key: 'since_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比since_id大的动态更新（即比since_id发表时间晚的动态更新）' },
                        { key: 'max_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比max_id小的动态更新（即比max_id发表时间早的动态更新）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(int默认值20，最大值100)' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                faq: {
                    name: '', docUrl: {type: '', url: ''}, url: '/post/faq',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'g_id', isMust: false, type: 'string', des: '群组编号' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索，当为空时则返回所有的动态更新' },
                        { key: 'filter_type', isMust: false, type: 'int', des: '过滤类型。默认值0，0表示所有；1表示我上传的；2表示我收藏的' },
                        { key: 'since_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比since_id大的动态更新（即比since_id发表时间晚的动态更新）' },
                        { key: 'max_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比max_id小的动态更新（即比max_id发表时间早的动态更新）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(int默认值20，最大值100)' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                list_toppost: {
                    name: '', docUrl: {type: '', url: ''}, url: '/post/list_toppost',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                detail: {
                    name: '', docUrl: {type: '', url: ''}, url: '/post/detail',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'p_id', isMust: true, type: 'string', des: '动态更新编号' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                reply: {
                    name: '', docUrl: {type: '', url: ''}, url: '/post/reply',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'p_id', isMust: true, type: 'string', des: '动态更新编号' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                qa_thebestcomment: {
                    name: '', docUrl: {type: '', url: ''}, url: '/post/qa_thebestcomment',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'p_id', isMust: true, type: 'string', des: '动态更新编号' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                update: {
                    name: '', docUrl: {type: '', url: ''}, url: '/post/update',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'g_id', isMust: false, type: 'string', des: '可为空，动态分享群组编号(多个群组用逗号隔开)' },
                        { key: 'p_msg', isMust: true, type: 'string', des: '动态更新内容(###userID###代表@某个人,$$$groupID$$$代表@某个群组，#标签内容#代表给动态定义标签)' },
                        { key: 'p_type', isMust: false, type: 'int', des: '动态更新类型( 0表示普通动态更新（默认值）;1表示链接动态更新 ;4表示问答动态更新	)' },
                        { key: 's_type', isMust: false, type: 'int', des: '分享范围(0表示分享给所有同事;1表示群内分享；2表示所有关注者和群组；3表示分享给自己； 默认0表示分享给所有同事)' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                upload: {
                    name: '', docUrl: {type: '', url: ''}, url: '/post/upload',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'g_id', isMust: false, type: 'string', des: '可为空，动态分享群组编号(多个群组用逗号隔开)' },
                        { key: 'p_msg', isMust: true, type: 'string', des: '动态更新内容(###userID###代表@某个人,$$$groupID$$$代表@某个群组，#标签内容#代表给动态定义标签)' },
                        { key: 'f_type', isMust: false, type: 'int', des: '可为空，默认为picture：表示上传图片；document：表示上传文档' },
                        { key: 'p_img或p_doc', isMust: true, type: 'binary', des: '要上传的图片、文档。图片仅支持JPEG,GIF,PNG,目前上传图片大小限制为<8M。文档仅支持DOC,PDF,XLS,PPT,TXT,压缩包,目前上传文件大小限制为<50M' },
                        { key: 'is_center', isMust: false, type: 'int', des: '是否加入中心(0表示不加入；1表示加入 默认为1加入)' },
                        { key: 's_type', isMust: false, type: 'string', des: '分享范围(0表示分享给所有同事;1表示群内分享；2表示所有关注者和群组；3表示分享给自己； 默认0表示分享给所有同事)' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                edit: {
                    name: '', docUrl: {type: '', url: ''}, url: '/post/edit',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'p_id', isMust: true, type: 'string', des: '动态更新编号' },
                        { key: 'g_id', isMust: false, type: 'string', des: '可为空，动态分享群组编号(多个群组用逗号隔开)' },
                        { key: 'p_msg', isMust: true, type: 'string', des: '动态更新内容(###userID###代表@某个人,$$$groupID$$$代表@某个群组，#标签内容#代表给动态定义标签)' },
                        { key: 's_type', isMust: false, type: 'string', des: '分享范围(0表示分享给所有同事;1表示群内分享；2表示所有关注者和群组；3表示分享给自己； 默认0表示分享给所有同事)' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                top_post: {
                    name: '', docUrl: {type: '', url: ''}, url: '/post/top_post',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'p_id', isMust: true, type: 'binary', des: '动态更新编号' },
                        { key: 'option', isMust: false, type: 'int', des: '置顶时长 默认为:不限时长 1:代表时长24小时；2:代表时长48小时；3:代表时长72小时.' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                delete: {
                    name: '', docUrl: {type: '', url: ''}, url: '/post/delete',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'p_id', isMust: true, type: 'binary', des: '动态更新编号' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                repost: {
                    name: '', docUrl: {type: '', url: ''}, url: '/post/repost',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'g_id', isMust: false, type: 'string', des: '可为空，动态分享群组编号(多个群组用逗号隔开)' },
                        { key: 'p_msg', isMust: true, type: 'string', des: '动态更新内容(###userID###代表@某个人,$$$groupID$$$代表@某个群组，#标签内容#代表给动态定义标签)' },
                        { key: 're_p_id', isMust: true, type: 'string', des: '待转发的动态更新编号' },
                        { key: 'f_type', isMust: false, type: 'int', des: '可为空，默认为picture：表示上传图片；document：表示上传文档' },
                        { key: 'p_img或p_doc', isMust: true, type: 'binary', des: '要上传的图片、文档。图片仅支持JPEG,GIF,PNG,目前上传图片大小限制为<8M。文档仅支持DOC,PDF,XLS,PPT,TXT,压缩包,目前上传文件大小限制为<50M' },
                        { key: 'withComment', isMust: false, type: 'int', des: '同时回复转发的动态(0表示不回复；1表示同时回复)' },
                        { key: 's_type', isMust: false, type: 'string', des: '分享范围(0表示分享给所有同事;1表示群内分享；2表示所有关注者和群组；3表示分享给自己； 默认0表示分享给所有同事)' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                add_reply: {
                    name: '', docUrl: {type: '', url: ''}, url: '/post/add_reply',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'p_id', isMust: true, type: 'string', des: '回复的动态更新编号' },
                        { key: 'r_id', isMust: false, type: 'string', des: '回复编号（可以对别人的回复进行回复）[可选]' },
                        { key: 'r_msg', isMust: true, type: 'int', des: '回复的消息内容(###userID###代表@某个人,$$$groupID$$$代表@某个群组)' },
                        { key: 'f_type', isMust: false, type: 'int', des: '可为空(为空时 p_img或p_doc也必须为空)，picture：表示上传图片；document：表示上传文档' },
                        { key: 'p_img或p_doc', isMust: true, type: 'binary', des: '要上传的图片、文档。图片仅支持JPEG,GIF,PNG,目前上传图片大小限制为<8M。文档仅支持DOC,PDF,XLS,PPT,TXT,压缩包,目前上传文件大小限制为<50M' },
                        { key: 'isReshared', isMust: false, type: 'string', des: '同时转发动态(0表示不转发动态；1表示同时转发动态)' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' },
                        { key: 'g_id', isMust: false, type: 'string', des: '可为空，动态分享群组编号(多个群组用逗号隔开)' },
                        { key: 's_type', isMust: false, type: 'string', des: '分享范围(0表示分享给所有同事;1表示群内分享；2表示所有关注者和群组；3表示分享给自己； 默认0表示分享给所有同事)' }

                    ]
                },
                delete_reply: {
                    name: '', docUrl: {type: '', url: ''}, url: '/post/delete_reply',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'p_id', isMust: true, type: 'string', des: '动态更新编号' },
                        { key: 'r_id', isMust: false, type: 'string', des: '回复编号（必须是当前登录用户自己创建的回复' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                add_favorite: {
                    name: '', docUrl: {type: '', url: ''}, url: '/post/add_favorite',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'p_id', isMust: true, type: 'string', des: '动态更新编号' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                delete_favorite: {
                    name: '', docUrl: {type: '', url: ''}, url: '/post/delete_favorite',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'p_id', isMust: true, type: 'string', des: '动态更新编号' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                add_like: {
                    name: '', docUrl: {type: '', url: ''}, url: '/post/add_like',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'p_id', isMust: true, type: 'string', des: '动态更新编号' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                delete_like: {
                    name: '', docUrl: {type: '', url: ''}, url: '/post/delete_like',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'p_id', isMust: true, type: 'string', des: '动态更新编号' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                list_tag: {
                    name: '', docUrl: {type: '', url: ''}, url: '/post/list_tag',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索' },
                        { key: 'pageindex', isMust: false, type: 'int64', des: '指定当前的页码' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数（默认值20，最大值100' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                tag: {
                    name: '', docUrl: {type: '', url: ''}, url: '/post/tag',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'tag', isMust: true, type: 'string', des: '标签名称' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索' },
                        { key: 'max_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比max_id小的动态更新（即比max_id发表时间早的动态更新）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数（默认值20，最大值100' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                add_tag: {
                    name: '', docUrl: {type: '', url: ''}, url: '/post/add_tag',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'p_id', isMust: false, type: 'string', des: '动态更新编号(p_id为空 只创建个标签)' },
                        { key: 'tag', isMust: true, type: 'string', des: '标签名称' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                delete_tag: {
                    name: '', docUrl: {type: '', url: ''}, url: '/post/delete_tag',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'p_id', isMust: true, type: 'string', des: '动态更新编号(p_id为空 只创建个标签)' },
                        { key: 'tag', isMust: true, type: 'string', des: '标签名称' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                set_bestcomment: {
                    name: '', docUrl: {type: '', url: ''}, url: '/post/set_bestcomment',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'p_id', isMust: true, type: 'string', des: '动态更新编号(p_id为空 只创建个标签)' },
                        { key: 'r_id', isMust: true, type: 'string', des: '标签名称' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                }

            },
            v2: {
                all: {
                    name: '', docUrl: {type: '', url: ''}, url: '/post/v2/all',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索，当为空时则返回所有的动态更新' },
                        { key: 'post_type', isMust: false, type: 'int', des: '筛选动态更新类型,默认-1：表示全部动态；0：普通消息；1：链接；2：图片；3：文档；4：提问；7：投票；8：视频' },
                        { key: 'since_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比since_id大的动态更新（即比since_id发表时间晚的动态更新）' },
                        { key: 'max_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比max_id小的动态更新（即比max_id发表时间早的动态更新）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(int默认值20，最大值100)' }
                    ]
                },
                atme_2: {
                    name: '', docUrl: {type: '', url: ''}, url: '/post/v2/atme_2',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'isUnreading', isMust: false, type: 'int', des: '是否获取未读提及我的动态 默认0：否' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索，当为空时则返回所有的动态更新' },
                        { key: 'post_type', isMust: false, type: 'int', des: '筛选动态更新类型,默认-1：表示全部动态；0：普通消息；1：链接；2：图片；3：文档；4：提问；7：投票' },
                        { key: 'pageindex', isMust: false, type: 'int64', des: '指定当前的页码' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(int默认值20，最大值100)' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                replybyme: {
                    name: '', docUrl: {type: '', url: ''}, url: '/post/v2/replybyme',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索，当为空时则返回所有的动态更新' },
                        { key: 'max_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比max_id小的动态更新（即比max_id发表时间早的动态更新）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(int默认值20，最大值100)' }
                    ]
                },
                replyme: {
                    name: '', docUrl: {type: '', url: ''}, url: '/post/v2/replyme',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索，当为空时则返回所有的动态更新' },
                        { key: 'max_id', isMust: false, type: 'string', des: '若指定此参数，则只返回ID比max_id小的动态更新（即比max_id发表时间早的动态更新）(特殊，数据库内部处理)' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(int默认值20，最大值100)' }
                    ]
                },
                favorite: {
                    name: '', docUrl: {type: '', url: ''}, url: '/post/v2/favorite',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索，当为空时则返回所有的动态更新' },
                        { key: 'post_type', isMust: false, type: 'int', des: '筛选动态更新类型,默认-1：表示全部动态；0：普通消息；1：链接；2：图片；3：文档；4：提问；7：投票' },
                        { key: 'since_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比since_id大的动态更新（即比since_id发表时间晚的动态更新）' },
                        { key: 'max_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比max_id小的动态更新（即比max_id发表时间早的动态更新）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(int默认值20，最大值100)' }
                    ]
                },
                group: {
                    name: '', docUrl: {type: '', url: ''}, url: '/post/v2/group',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索，当为空时则返回所有的动态更新' },
                        { key: 'g_id', isMust: true, type: 'string', des: '群组编号' },
                        { key: 'max_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比max_id小的动态更新（即比max_id发表时间早的动态更新）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(int默认值20，最大值100)' }
                    ]
                },
                user: {
                    name: '', docUrl: {type: '', url: ''}, url: '/post/v2/user',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'u_id', isMust: true, type: 'string', des: '用户编号' },
                        { key: 'max_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比max_id小的动态更新（即比max_id发表时间早的动态更新）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(int默认值20，最大值100)' }
                    ]
                },
                doc: {
                    name: '', docUrl: {type: '', url: ''}, url: '/post/v2/doc',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'g_id', isMust: false, type: 'string', des: '群组编号' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索，当为空时则返回所有的动态更新' },
                        { key: 'filter_type', isMust: false, type: 'int', des: '过滤类型。默认值0，0表示所有；1表示我上传的；2表示我收藏的' },
                        { key: 'since_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比since_id大的动态更新（即比since_id发表时间晚的动态更新）' },
                        { key: 'max_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比max_id小的动态更新（即比max_id发表时间早的动态更新）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(int默认值20，最大值100)' }
                    ]
                },
                img: {
                    name: '', docUrl: {type: '', url: ''}, url: '/post/v2/img',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'g_id', isMust: false, type: 'string', des: '群组编号' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索，当为空时则返回所有的动态更新' },
                        { key: 'filter_type', isMust: false, type: 'int', des: '过滤类型。默认值0，0表示所有；1表示我上传的；2表示我收藏的' },
                        { key: 'since_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比since_id大的动态更新（即比since_id发表时间晚的动态更新）' },
                        { key: 'max_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比max_id小的动态更新（即比max_id发表时间早的动态更新）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(int默认值20，最大值100)' }
                    ]
                },
                faq: {
                    name: '', docUrl: {type: '', url: ''}, url: '/post/v2/faq',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'g_id', isMust: false, type: 'string', des: '群组编号' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索，当为空时则返回所有的动态更新' },
                        { key: 'filter_type', isMust: false, type: 'int', des: '过滤类型。默认值0，0表示所有；1表示我上传的；2表示我收藏的' },
                        { key: 'since_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比since_id大的动态更新（即比since_id发表时间晚的动态更新）' },
                        { key: 'max_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比max_id小的动态更新（即比max_id发表时间早的动态更新）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(int默认值20，最大值100)' }
                    ]
                },
                list_toppost: {
                    name: '', docUrl: {type: '', url: ''}, url: '/post/v2/list_toppost',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' }
                    ]
                },
                detail: {
                    name: '', docUrl: {type: '', url: ''}, url: '/post/v2/detail',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'p_id', isMust: true, type: 'string', des: '动态更新编号' }
                    ]
                },
                reply: {
                    name: '', docUrl: {type: '', url: ''}, url: '/post/v2/reply',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'p_id', isMust: true, type: 'string', des: '动态更新编号' }
                    ]
                },
                qa_thebestcomment: {
                    name: '', docUrl: {type: '', url: ''}, url: '/post/v2/qa_thebestcomment',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'p_id', isMust: true, type: 'string', des: '动态更新编号' }
                    ]
                }
            }
        },
        calendar: {
            v1: {
                todo: {
                    name: '', docUrl: {type: '', url: ''}, url: '/calendar/todo',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'rssCal', isMust: false, type: 'bool', des: '是否订阅待办日程。0表不订阅；以列表形式返回，1表示订阅，直接返回订阅链接url'},
                        { key: 'group', isMust: false, type: 'bool', des: '是否以日程的起始时间分组显示。0表不；以列表形式返回，1表示分组，以分组列表显示' },
                        { key: 'u_ids', isMust: false, type: 'string', des: '用户编号 查看其他同事的日程，多个以逗号相隔' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                day: {
                    name: '', docUrl: {type: '', url: ''}, url: '/calendar/day',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'date', isMust: false, type: 'string', des: '日期字符串。默认值为今天。如：2013-05-05。' },
                        { key: 'u_ids', isMust: false, type: 'string', des: '用户编号 查看其他同事的日程，多个以逗号相隔' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                edit: {
                    name: '根据日程编号修改日程',
                    docUrl: {type: '', url: '/v1calendar_detail.html'},
                    url: '/calendar/edit',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'c_id', isMust: true, type: 'string', des: '日程编号' },
                        { key: 'c_name', isMust: true, type: 'string', des: '日程主题' },
                        { key: 'c_stime', isMust: true, type: 'string', des: '日程开始时间，精确到分。如：2013-05-05 10:25' },
                        { key: 'c_etime', isMust: true, type: 'string', des: '日程结束时间，精确到分。如：2013-05-05 10:25' },
                        { key: 'c_allday', isMust: false, type: 'int', des: '是否全天日程。0表示非全天，1表示全天 默认值0' },
                        { key: 'c_address', isMust: false, type: 'string', des: '日程地点' },
                        { key: 'c_des', isMust: false, type: 'string', des: '日程描述' },
                        { key: 'c_private', isMust: false, type: 'int', des: '是否私人日程。0表示私人，1表示非私人 默认值1' },
                        { key: 'g_ids', isMust: false, type: 'string', des: '私有日程分享群组 分享多群组用,隔开' },
                        { key: 'c_mids', isMust: false, type: 'string', des: '指定的日程成员 (多个成员用逗号隔开)。注：明道用户' },
                        { key: 'c_memails', isMust: false, type: 'string', des: '指定的日程成员邮件 (多个成员用逗号隔开)。注：非明道用户' },
                        { key: 'is_recur', isMust: false, type: 'int', des: '是否为重复日程. 1:是 0:不是 默认值0' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json)' },
                        { key: 'frequency', isMust: false, type: 'int', des: '当is_recur为1 即为重复日程时该值必填，频率 1 表示Daily; 2 表示Weekly; 3 表示Monthly; 4 表示Yearly' },
                        { key: 'interval', isMust: false, type: 'int', des: '当is_recur为1 即为重复日程时该值选填，重复间隔 默认值 1。' },
                        { key: 'week_day', isMust: false, type: 'int', des: '当 frequency=2 该值必填，周几重复 1:周一 2:周二 3:周三 4:周四 5:周五 6 周六 7:周日。多选用|隔开' },
                        { key: 'recur_count', isMust: false, type: 'int', des: '当 is_recur为1即为重复日程时该值选填，周几重复 1:周一 2:周二 3:周三 4:周四 5:周五 6 周六 7:周日。多选用|隔开' },
                        { key: 'until_date', isMust: false, type: 'idatetime', des: '当 is_recur为1 该值选填，结束日期 如果recur_count为0且until_date为null,则为永久重复' },
                        { key: 'c_remindType', isMust: false, type: 'int', des: '' },
                        { key: 'c_remindTime', isMust: false, type: 'int', des: '' },
                        { key: 'c_categoryID', isMust: false, type: 'int', des: '' }

                    ]
                },
                create: {
                    name: '创建一个新的日程',
                    docUrl: {type: '', url: '/v1calendar_detail.html'},
                    url: '/calendar/create',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'c_name', isMust: true, type: 'string', des: '日程主题' },
                        { key: 'c_stime', isMust: true, type: 'string', des: '日程开始时间，精确到分。如：2013-05-05 10:25' },
                        { key: 'c_etime', isMust: true, type: 'string', des: '日程结束时间，精确到分。如：2013-05-05 10:25' },
                        { key: 'c_allday', isMust: false, type: 'int', des: '是否全天日程。0表示非全天，1表示全天 默认值0' },
                        { key: 'c_address', isMust: false, type: 'string', des: '日程地点' },
                        { key: 'c_des', isMust: false, type: 'string', des: '日程描述' },
                        { key: 'c_private', isMust: false, type: 'int', des: '是否私人日程。0表示私人，1表示非私人 默认值1' },
                        { key: 'g_ids', isMust: false, type: 'string', des: '私有日程分享群组 分享多群组用,隔开' },
                        { key: 'c_mids', isMust: false, type: 'string', des: '指定的日程成员 (多个成员用逗号隔开)。注：明道用户' },
                        { key: 'c_memails', isMust: false, type: 'string', des: '指定的日程成员邮件 (多个成员用逗号隔开)。注：非明道用户' },
                        { key: 'is_recur', isMust: false, type: 'int', des: '是否为重复日程. 1:是 0:不是 默认值0' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json)' },
                        { key: 'frequency', isMust: false, type: 'int', des: '当is_recur为1 即为重复日程时该值必填，频率 1 表示Daily; 2 表示Weekly; 3 表示Monthly; 4 表示Yearly' },
                        { key: 'interval', isMust: false, type: 'int', des: '当is_recur为1 即为重复日程时该值选填，重复间隔 默认值 1。' },
                        { key: 'week_day', isMust: false, type: 'int', des: '当 frequency=2 该值必填，周几重复 1:周一 2:周二 3:周三 4:周四 5:周五 6 周六 7:周日。多选用|隔开' },
                        { key: 'recur_count', isMust: false, type: 'int', des: '当 is_recur为1即为重复日程时该值选填，周几重复 1:周一 2:周二 3:周三 4:周四 5:周五 6 周六 7:周日。多选用|隔开' },
                        { key: 'until_date', isMust: false, type: 'idatetime', des: '当 is_recur为1 该值选填，结束日期 如果recur_count为0且until_date为null,则为永久重复' }
                    ]
                }

            }
        },
        group: {
            v1: {
                create: {
                    name: '创建一个新的日程',
                    docUrl: {type: '', url: '/v1group.html'},
                    url: '/group/create',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'g_name', isMust: true, type: 'string', des: '要创建的群组的名称' },
                        { key: 'about', isMust: false, type: 'string', des: '群组的简介' },
                        { key: 'is_public', isMust: true, type: 'int', des: '是否公开群组，0表示私有群组，1表示公开群组' },
                        { key: 'is_hidden', isMust: false, type: 'int', des: '是否列入公司群组列表(*只有私有群组才有此功能)，0不隐藏，1隐藏' },
                        { key: 'isApproval', isMust: false, type: 'string', des: '用户加入是否审批（0：否，1：是）' },
                        { key: 'isPost', isMust: false, type: 'string', des: '是否作为动态分享群组（0：否，1：是）' },
                        { key: 'deptID', isMust: false, type: 'int', des: '部门ID（如果设置官方群组需传关联的部门ID）' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                all: {
                    name: '获取企业所有的群组 *',
                    docUrl: {type: '', url: '/v1group.html'},
                    url: '/group/all',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索，当为空时则返回所有的群组' },
                        { key: 'sort_type', isMust: false, type: 'int', des: '按群组名称排序 默认0：倒序；1：升序' },
                        { key: 'pageindex', isMust: false, type: 'int', des: '指定当前的页码（不指定页码返回所有）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数（默认值20，最大值100）' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                detail: {
                    name: '根据群组编号获取群组的基本资料',
                    docUrl: {type: '', url: '/v1group_detail.html'},
                    url: '/group/detail',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'g_id', isMust: true, type: 'string', des: '群组编号' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                my_created: {
                    name: '获取当前登录用户创建的群组',
                    docUrl: {type: '', url: '/v1group.html'},
                    url: '/group/my_created',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'u_id', isMust: false, type: 'string', des: '指定用户编号，获取此用户创建的群组，默认为当前授权用户' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                my_joined: {
                    name: '获取当前登录用户加入的群组',
                    docUrl: {type: '', url: '/v1group.html'},
                    url: '/group/my_joined',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'u_id', isMust: false, type: 'string', des: '指定用户编号，获取此用户创建的群组，默认为当前授权用户' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                user: {
                    name: '获取群组成员的用户信息',
                    docUrl: {type: '', url: '/v1user.html'},
                    url: '/group/user',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'g_id', isMust: false, type: 'string', des: '群组编号' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                exit: {
                    name: '群组操作（退出、加入、关闭、开启、解散）',
                    docUrl: {type: '', url: ''},
                    url: '/group/exit',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'g_id', isMust: false, type: 'string', des: '群组编号' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                invite: {
                    name: '邀请用户（同事邮箱）加入群组',
                    docUrl: {type: '', url: ''},
                    url: '/group/invite',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'g_id', isMust: false, type: 'string', des: '群组编号' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                }
            }
        },
        user: {
            v1: {
                all: {
                    name: '获取企业通讯录信息 *',
                    docUrl: {type: '', url: '/v1user.html'},
                    url: '/user/all',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'user_filter', isMust: true, type: 'int', des: '用户筛选 0：普通用户;1:普通用户和外联群组用户;2:外联群组用户 （user_filter=1或user_filter=2 只能网络管理员有权查询） 默认0' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词 通过用户的用户名、email、部门、职位、移动电话、联系电话等进行搜索' },
                        { key: 'pageindex', isMust: false, type: 'int', des: '指定当前的页码（不指定页码返回所有）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(默认值20，最大值100)' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                search: {
                    name: '根据筛选条件获取用户列表信息 *',
                    docUrl: {type: '', url: '/v1user.html'},
                    url: '/user/search',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词 通过用户的用户名、email、部门、职位、移动电话、联系电话等进行搜索' },
                        { key: 'g_id', isMust: false, type: 'string', des: '群组编号' },
                        { key: 'dep', isMust: false, type: 'string', des: '部门完整名称' },
                        { key: 'pageindex', isMust: false, type: 'int', des: '指定当前的页码（不指定页码返回所有）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(默认值20，最大值100)' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                detail: {
                    name: '根据用户编号获取用户的基本资料 *',
                    docUrl: {type: '', url: '/v1user_detail.html'},
                    url: '/user/detail',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'u_id', isMust: true, type: 'string', des: '要查询的用户编号' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                followed: {
                    name: '根据用户编号获取用户正在关注用户信息 *',
                    docUrl: {type: '', url: '/v1user.html'},
                    url: '/user/followed',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'u_id', isMust: true, type: 'string', des: '要查询的用户编号' },
                        { key: 'pageindex', isMust: false, type: 'int', des: '指定当前的页码（不指定页码返回所有）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(默认值20，最大值100)' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                list: {
                    name: '根据用户序列获取用户列表信息 *',
                    docUrl: {type: '', url: '/v1user.html'},
                    url: '/user/list',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'u_ids', isMust: true, type: 'string', des: '用户编号，多个以逗号相隔' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                get_managerUser: {
                    name: '根据用户编号获取用户的直属上级的信息 *',
                    docUrl: {type: '', url: '/v1user.html'},
                    url: '/user/get_managerUser',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'u_id', isMust: true, type: 'string', des: '要查询的用户编号 u_id为空则默认为当前授权用户' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                get_managerUserTree: {
                    name: '根据用户编号获取用户的上级树的用户信息 *',
                    docUrl: {type: '', url: '/v1user.html'},
                    url: '/user/get_managerUserTree',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'u_id', isMust: true, type: 'string', des: '要查询的用户编号 u_id为空则默认为当前授权用户' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                get_subordinateUsers: {
                    name: '根据用户编号获取用户的下级第一级的用户信息 *',
                    docUrl: {type: '', url: '/v1user.html'},
                    url: '/user/get_subordinateUsers',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'u_id', isMust: true, type: 'string', des: '要查询的用户编号 u_id为空则默认为当前授权用户' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                set_underlingUser: {
                    name: '根据用户编号设置该用户的下属 *',
                    docUrl: {type: 'string', url: ''},
                    url: '/user/get_subordinateUsers',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'mid', isMust: true, type: 'string', des: '要设置下属的用户ID' },
                        { key: 'uids', isMust: true, type: 'string', des: '下属ID 多个用逗号隔开' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                department: {
                    name: '获取企业所有部门列表信息 *',
                    docUrl: {type: '', url: '/v1user_department.html'},
                    url: '/user/department',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                work_site: {
                    name: '获取企业所有作业点列表信息 *',
                    docUrl: {type: '', url: '/v1user_worksite.html'},
                    url: '/user/department',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                add_followed: {
                    name: '当前登录用户添加关注关系 *',
                    docUrl: {type: '', url: ''},
                    url: '/user/add_followed',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'u_id', isMust: true, type: 'string', des: '需要关注的用户编号' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                delete_followed: {
                    name: '当前登录用户删除关注关系 * ',
                    docUrl: {type: '', url: ''},
                    url: '/user/delete_followed',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'u_id', isMust: true, type: 'string', des: '需要取消关注的用户编号' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                invite: {
                    name: '邀请用户（同事邮箱）加入企业网络  ',
                    docUrl: {type: '', url: ''},
                    url: '/user/invite',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'email', isMust: true, type: 'string', des: '邀请的邮箱' },
                        { key: 'fullname', isMust: true, type: 'string', des: '被邀请人姓名' },
                        { key: 'msg', isMust: true, type: 'string', des: '邀请的消息' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                frequent: {
                    name: '获取当前登录用户常用联系人列表 * ',
                    docUrl: {type: '', url: '/v1user.html'},
                    url: '/user/frequent',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'pageindex', isMust: false, type: 'int', des: '指定当前的页码（不指定页码返回所有）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(默认值20，最大值100)' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                add_frequent: {
                    name: '当前登录用户添加常用关系 * ',
                    docUrl: {type: '', url: ''},
                    url: '/user/add_frequent',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'u_id', isMust: true, type: 'string', des: '需要添加为常用的用户编号' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                delete_frequent: {
                    name: '当前登录用户删除常用关系 * ',
                    docUrl: {type: '', url: ''},
                    url: '/user/delete_frequent',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'u_id', isMust: true, type: 'string', des: '需要取消常用的用户编号' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                invited_user: {
                    name: '获取当前用户邀请新人的记录 * ',
                    docUrl: {type: '', url: '/v1user.html'},
                    url: '/user/invited_user',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'status', isMust: false, type: 'int', des: '邀请记录状态 默认0：尚未获得回应的邀请；1：用户未确认；2：确认待审批；3：未通过审批；4成功' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                again_inviteuser: {
                    name: '重新邀请新人 * ',
                    docUrl: {type: 'string', url: ''},
                    url: '/user/again_inviteuser',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'emails', isMust: false, type: 'string', des: '新邀请用户email 多个邮箱用逗号隔开' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                close_inviteuser: {
                    name: '取消邀请新人的记录 * ',
                    docUrl: {type: 'string', url: ''},
                    url: '/user/close_inviteuser',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'authTypes', isMust: true, type: 'string', des: '取消已邀请类型 多个用逗号隔开' },
                        { key: 'tokens', isMust: true, type: 'string', des: '取消已邀请的用户token 多个token用逗号隔开' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                get_userMetioned: {
                    name: '与我最常协作的用户列表信息 * ',
                    docUrl: {type: '', url: '/v1user.html'},
                    url: '/user/get_userMetioned',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                },
                get_scoreHistory: {
                    name: '根据用户编号获取用户个人积分历史 * ',
                    docUrl: {type: '', url: '/v1user_scroeHistory.html'},
                    url: '/user/get_scoreHistory',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'u_id', isMust: true, type: 'string', des: '要查询的用户编号' },
                        { key: 'pageindex', isMust: false, type: 'int', des: '指定当前的页码（不指定页码返回所有）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(默认值20)' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                }

            },
            v2:
            {
                invite: {
                    name: '邀请新人 v2 ',
                    docUrl: {type: 'string', url: ''},
                    url: '/user/v2/invite',
                    requestMode: 'POST',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'emails', isMust: false, type: 'string', des: '邀请用户email 多个邮箱用逗号隔开' },
                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
                    ]
                }
            }
        }


    };

    function apiSetting() {

        var apiSetting = {
            getApiAll: getApiAll,
            getApiSetting: getApiSetting,
            getapiPram: getapiPram
        }

        return apiSetting;

        function getApiAll(scallback) {
            var moduleArray = [];
            for (var module in apiParam) {
                var moduleItem = apiParam[module];
                var moduleObj = {};
                var versionArray = [];
                for (var version in moduleItem) {
                    var versionItem = moduleItem[version];
                    var versionObj = {};
                    var portArray = [];
                    for (var port in versionItem) {
                        portArray.push(port);
                    }
                    versionObj.version = version;
                    versionObj.value = portArray;
                    versionArray.push(versionObj);
                }
                moduleObj.module = module;
                moduleObj.value = versionArray;
                moduleArray.push(moduleObj);
            }
            scallback(moduleArray);
        }

        function getApiSetting(module, version, port, scallback) {
            var param = apiParam[module][version][port];
            if (param) {
                scallback(param);
            }
        }

        function getapiPram(search, scallback) {
            var list = [];
            for (var module in apiParam) {
                var moduleItem = apiParam[module];
                var moduleObj = {};
                var versionArray = [];
                for (var version in moduleItem) {
                    var versionItem = moduleItem[version];
                    for (var port in versionItem) {
                        if (port.toUpperCase().indexOf(search.toUpperCase()) != -1) {
                            var portObject = { "module": module, "version": version, "port": port }
                            list.push(portObject);
                        }
                    }
                }
            }
            scallback(list)
        }
    }
})();










