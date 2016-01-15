(function () {
    'use strict';

    angular
        .module('mmpadmin')
        .factory('apiSetting2', apiSetting);

    var apiParam = {
        task: {
            v1: {
                get_folders: {
                    name: '获取项目', docUrl: {type: '', url: ''},
                    url: '/v1/task/get_folders',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索' },
                        { key: 'filter_type', isMust: false, type: 'int', des: '过滤类型 0:全部项目 1:我参与 2：我负责 3：我托付 4：与我协作的 默认：全部' },
                        { key: 'sort', isMust: false, type: 'int', des: '筛选：1:星标 2:创建日期 3:负责人 4:颜色 5:A-Z 默认1' }
                    ]
                },
                add_folder: {
                    name: '创建一个新的项目 v4',
                    docUrl: {type: '', url: ''},
                    url: '/v1/task/add_folder',
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
                        { key: 'isTop', isMust: false, type: 'int', des: '是否置顶（默认：0：否，1：是）' }

                    ]
                }
            }
        },
        post: {
            v1: {
                all: {
                    name: '获取全公司的动态更新',
                    docUrl: {type: '', url: '/v1post.html'},
                    url: '/post/all',
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
                my: {
                    name: '获取当前登录用户发布的动态更新',
                    docUrl: {type: '', url: '/v1post.html'},
                    url: '/post/my',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索，当为空时则返回所有的动态更新' },
                        { key: 'post_type', isMust: false, type: 'int', des: '筛选动态更新类型,默认-1：表示全部动态；0：普通消息；1：链接；2：图片；3：文档；4：提问；7：投票；8：视频' },
                        { key: 'max_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比max_id小的动态更新（即比max_id发表时间早的动态更新）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(int默认值20，最大值100)' }
                    ]
                },
                atme_2: {
                    name: '获取提及@我的动态更新(适用inbox中的提到我的)',
                    docUrl: {type: '', url: '/v1replyment_atme.html'},
                    url: '/post/atme_2',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'isUnreading', isMust: false, type: 'int', des: '是否获取未读提及我的动态 默认0：否' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索，当为空时则返回所有的动态更新' },
                        { key: 'post_type', isMust: false, type: 'int', des: '筛选动态更新类型,默认-1：表示全部动态；0：普通消息；1：链接；2：图片；3：文档；4：提问；7：投票；8：视频' },
                        { key: 'pageindex', isMust: false, type: 'int64', des: '指定当前的页码' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(int默认值20，最大值100)' }
                    ]
                },
                replybyme: {
                    name: '获取我回复的最新回复信息',
                    docUrl: {type: '', url: '/v1replyment_atme.html'},
                    url: '/post/replybyme',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索，当为空时则返回所有的动态更新' },
                        { key: 'max_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比max_id小的动态更新（即比max_id发表时间早的动态更新）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(int默认值20，最大值100)' }
                    ]
                },
                replyme: {
                    name: '获取回复我的最新回复信息',
                    docUrl: {type: '', url: '/v1replyment_me.html'},
                    url: '/post/replyme',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索，当为空时则返回所有的动态更新' },
                        { key: 'max_id', isMust: false, type: 'string', des: '若指定此参数，则只返回ID比max_id小的动态更新（即比max_id发表时间早的动态更新）(特殊，数据库内部处理)' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(int默认值20，最大值100)' }
                    ]
                },
                favorite: {
                    name: '获取当前登录用户收藏的动态更新',
                    docUrl: {type: '', url: '/v1post.html'},
                    url: '/post/favorite',
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
                group: {
                    name: '获取群组的动态更新',
                    docUrl: {type: '', url: '/v1post.html'},
                    url: '/post/group',
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
                    name: '获取用户发布的动态更新',
                    docUrl: {type: '', url: '/v1post.html'},
                    url: '/post/user',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'u_id', isMust: true, type: 'string', des: '用户编号' },
                        { key: 'max_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比max_id小的动态更新（即比max_id发表时间早的动态更新）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(int默认值20，最大值100)' }
                    ]
                },
                doc: {
                    name: '获取文档列表信息',
                    docUrl: {type: '', url: '/v1post_doc.html'},
                    url: '/post/doc',
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
                    name: '获取图片列表信息',
                    docUrl: {type: '', url: '/v1post_img.html'},
                    url: '/post/img',
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
                video: {
                    name: '获取视频列表信息',
                    docUrl: {type: '', url: '/v1post.html'},
                    url: '/post/video',
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
                    name: '获取问答列表信息',
                    docUrl: {type: '', url: '/v1post_faq.html'},
                    url: '/post/faq',
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
                    name: '获取全公司的置顶动态更新',
                    docUrl: {type: '', url: '/v1post.html'},
                    url: '/post/list_toppost',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' }
                    ]
                },
                detail: {
                    name: '根据动态更新编号获取单条动态更新内容',
                    docUrl: {type: '', url: '/v1post_detail.html'},
                    url: '/post/detail',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'p_id', isMust: true, type: 'string', des: '动态更新编号' }
                    ]
                },
                reply: {
                    name: '根据动态更新编号获取某条动态更新的回复列表信息',
                    docUrl: {type: '', url: '/v1post_replyment.html'},
                    url: '/post/reply',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'p_id', isMust: true, type: 'string', des: '动态更新编号' }
                    ]
                },
//                qa_thebestcomment: {
//                    name: '',
//                    docUrl: {type: '', url: ''},
//                    url: '/post/qa_thebestcomment',
//                    requestMode: 'get',
//                    params: [
//                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
//                        { key: 'p_id', isMust: true, type: 'string', des: '动态更新编号' },
//                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
//                    ]
//                },
                update: {
                    name: '发布一条动态更新',
                    docUrl: {type: 'string', url: ''},
                    url: '/post/update',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'g_id', isMust: false, type: 'string', des: '可为空，动态分享群组编号(多个群组用逗号隔开)' },
                        { key: 'p_msg', isMust: true, type: 'string', des: '动态更新内容(###userID###代表@某个人,$$$groupID$$$代表@某个群组，#标签内容#代表给动态定义标签)' },
                        { key: 'p_type', isMust: false, type: 'int', des: '动态更新类型( 0表示普通动态更新（默认值）;1表示链接动态更新 ;4表示问答动态更新	)' },
                        { key: 's_type', isMust: false, type: 'int', des: '分享范围(0表示分享给所有同事;1表示群内分享；2表示所有关注者和群组；3表示分享给自己； 默认0表示分享给所有同事)' }
                    ]
                },
                upload: {
                    name: '上传图片、文档并发布一条动态更新',
                    docUrl: {type: 'string', url: ''},
                    url: '/post/upload',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'g_id', isMust: false, type: 'string', des: '可为空，动态分享群组编号(多个群组用逗号隔开)' },
                        { key: 'p_msg', isMust: true, type: 'string', des: '动态更新内容(###userID###代表@某个人,$$$groupID$$$代表@某个群组，#标签内容#代表给动态定义标签)' },
                        { key: 'f_type', isMust: false, type: 'int', des: '可为空，默认为picture：表示上传图片；document：表示上传文档' },
                        { key: 'p_img或p_doc', isMust: true, type: 'binary', des: '要上传的图片、文档。图片仅支持JPEG,GIF,PNG,目前上传图片大小限制为<8M。文档仅支持DOC,PDF,XLS,PPT,TXT,压缩包,目前上传文件大小限制为<50M' },
                        { key: 'is_center', isMust: false, type: 'int', des: '是否加入中心(0表示不加入；1表示加入 默认为1加入)' },
                        { key: 's_type', isMust: false, type: 'string', des: '分享范围(0表示分享给所有同事;1表示群内分享；2表示所有关注者和群组；3表示分享给自己； 默认0表示分享给所有同事)' }
                    ]
                },
                edit: {
                    name: '编辑一条动态更新',
                    docUrl: {type: '', url: ''},
                    url: '/post/edit',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'p_id', isMust: true, type: 'string', des: '动态更新编号' },
                        { key: 'g_id', isMust: false, type: 'string', des: '可为空，动态分享群组编号(多个群组用逗号隔开)' },
                        { key: 'p_msg', isMust: true, type: 'string', des: '动态更新内容(###userID###代表@某个人,$$$groupID$$$代表@某个群组，#标签内容#代表给动态定义标签)' },
                        { key: 's_type', isMust: false, type: 'string', des: '分享范围(0表示分享给所有同事;1表示群内分享；2表示所有关注者和群组；3表示分享给自己； 默认0表示分享给所有同事)' }
                    ]
                },
                top_post: {
                    name: '置顶一条动态更新（仅限网络管理员使用）',
                    docUrl: {type: '', url: ''},
                    url: '/post/top_post',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'p_id', isMust: true, type: 'binary', des: '动态更新编号' },
                        { key: 'option', isMust: false, type: 'int', des: '置顶时长 默认为:不限时长 1:代表时长24小时；2:代表时长48小时；3:代表时长72小时.' }
                    ]
                },
                delete: {
                    name: '根据动态更新编号删除一条动态更新 *',
                    docUrl: {type: '', url: ''},
                    url: '/post/delete',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'p_id', isMust: true, type: 'binary', des: '动态更新编号' }
                    ]
                },
                repost: {
                    name: '转发一条动态更新',
                    docUrl: {type: 'string', url: ''},
                    url: '/post/repost',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'g_id', isMust: false, type: 'string', des: '可为空，动态分享群组编号(多个群组用逗号隔开)' },
                        { key: 'p_msg', isMust: true, type: 'string', des: '动态更新内容(###userID###代表@某个人,$$$groupID$$$代表@某个群组，#标签内容#代表给动态定义标签)' },
                        { key: 're_p_id', isMust: true, type: 'string', des: '待转发的动态更新编号' },
                        { key: 'f_type', isMust: false, type: 'int', des: '可为空，默认为picture：表示上传图片；document：表示上传文档' },
                        { key: 'p_img或p_doc', isMust: true, type: 'binary', des: '要上传的图片、文档。图片仅支持JPEG,GIF,PNG,目前上传图片大小限制为<8M。文档仅支持DOC,PDF,XLS,PPT,TXT,压缩包,目前上传文件大小限制为<50M' },
                        { key: 'withComment', isMust: false, type: 'int', des: '同时回复转发的动态(0表示不回复；1表示同时回复)' },
                        { key: 's_type', isMust: false, type: 'string', des: '分享范围(0表示分享给所有同事;1表示群内分享；2表示所有关注者和群组；3表示分享给自己； 默认0表示分享给所有同事)' }
                    ]
                },
                add_reply: {
                    name: '增加一条动态更新的回复',
                    docUrl: {type: 'string', url: ''},
                    url: '/post/add_reply',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'p_id', isMust: true, type: 'string', des: '回复的动态更新编号' },
                        { key: 'r_id', isMust: false, type: 'string', des: '回复编号（可以对别人的回复进行回复）[可选]' },
                        { key: 'r_msg', isMust: true, type: 'int', des: '回复的消息内容(###userID###代表@某个人,$$$groupID$$$代表@某个群组)' },
                        { key: 'f_type', isMust: false, type: 'int', des: '可为空(为空时 p_img或p_doc也必须为空)，picture：表示上传图片；document：表示上传文档' },
                        { key: 'p_img或p_doc', isMust: false, type: 'binary', des: '要上传的图片、文档。图片仅支持JPEG,GIF,PNG,目前上传图片大小限制为<8M。文档仅支持DOC,PDF,XLS,PPT,TXT,压缩包,目前上传文件大小限制为<50M' },
                        { key: 'isReshared', isMust: false, type: 'string', des: '同时转发动态(0表示不转发动态；1表示同时转发动态)' },
                        { key: 'g_id', isMust: false, type: 'string', des: '可为空，动态分享群组编号(多个群组用逗号隔开)' },
                        { key: 's_type', isMust: false, type: 'string', des: '分享范围(0表示分享给所有同事;1表示群内分享；2表示所有关注者和群组；3表示分享给自己； 默认0表示分享给所有同事)' }

                    ]
                },
                delete_reply: {
                    name: '根据回复编号删除一条回复 *',
                    docUrl: {type: '', url: ''},
                    url: '/post/delete_reply',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'p_id', isMust: true, type: 'string', des: '动态更新编号' },
                        { key: 'r_id', isMust: false, type: 'string', des: '回复编号（必须是当前登录用户自己创建的回复' }
                    ]
                },
                add_favorite: {
                    name: '增加当前登录用户的一条动态更新收藏',
                    docUrl: {type: '', url: ''},
                    url: '/post/add_favorite',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'p_id', isMust: true, type: 'string', des: '动态更新编号' }
                    ]
                },
                delete_favorite: {
                    name: '删除当前登录用户收藏的一条动态更新',
                    docUrl: {type: '', url: ''},
                    url: '/post/delete_favorite',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'p_id', isMust: true, type: 'string', des: '动态更新编号' }
                    ]
                },
                add_like: {
                    name: '增加当前登录用户喜欢的一条动态更新',
                    docUrl: {type: '', url: ''},
                    url: '/post/add_like',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'p_id', isMust: true, type: 'string', des: '动态更新编号' }
                    ]
                },
                delete_like: {
                    name: '删除当前登录用户喜欢的一条动态更新',
                    docUrl: {type: '', url: ''},
                    url: '/post/delete_like',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'p_id', isMust: true, type: 'string', des: '动态更新编号' }
                    ]
                },
                list_tag: {
                    name: '获取当前企业动态更新标签信息',
                    docUrl: {type: '', url: '/v1tag.html'},
                    url: '/post/list_tag',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索' },
                        { key: 'pageindex', isMust: false, type: 'int64', des: '指定当前的页码' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数（默认值20，最大值100' }
                    ]
                },
                tag: {
                    name: '获取某个标签下的动态更新',
                    docUrl: {type: '', url: '/v1post.html'},
                    url: '/post/tag',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'tag', isMust: true, type: 'string', des: '标签名称' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索' },
                        { key: 'max_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比max_id小的动态更新（即比max_id发表时间早的动态更新）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数（默认值20，最大值100' }
                    ]
                },
                add_tag: {
                    name: '增加一条动态更新的标签',
                    docUrl: {type: '', url: ''},
                    url: '/post/add_tag',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'p_id', isMust: false, type: 'string', des: '动态更新编号(p_id为空 只创建个标签)' },
                        { key: 'tag', isMust: true, type: 'string', des: '标签名称' }
                    ]
                },
                delete_tag: {
                    name: '删除一条动态更新的标签',
                    docUrl: {type: '', url: ''},
                    url: '/post/delete_tag',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'p_id', isMust: true, type: 'string', des: '动态更新编号(p_id为空 只创建个标签)' },
                        { key: 'tag', isMust: true, type: 'string', des: '标签名称' }
                    ]
                }
//                set_bestcomment: {
//                    name: '', docUrl: {type: '', url: ''}, url: '/post/set_bestcomment',
//                    requestMode: 'get',
//                    params: [
//                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
//                        { key: 'p_id', isMust: true, type: 'string', des: '动态更新编号(p_id为空 只创建个标签)' },
//                        { key: 'r_id', isMust: true, type: 'string', des: '标签名称' },
//                        { key: 'format', isMust: false, type: 'string', des: '返回数据的格式（json）' }
//                    ]
//                }

            },
            v2: {
                all: {
                    name: '获取全公司的动态更新 v2',
                    docUrl: {type: '', url: '/v2post.html'},
                    url: '/post/v2/all',
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
                    name: '获取提及@我的动态更新(适用inbox中的提到我的) v2',
                    docUrl: {type: '', url: '/v2replyment_atme.html'},
                    url: '/post/v2/atme_2',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'isUnreading', isMust: false, type: 'int', des: '是否获取未读提及我的动态 默认0：否' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索，当为空时则返回所有的动态更新' },
                        { key: 'post_type', isMust: false, type: 'int', des: '筛选动态更新类型,默认-1：表示全部动态；0：普通消息；1：链接；2：图片；3：文档；4：提问；7：投票' },
                        { key: 'pageindex', isMust: false, type: 'int64', des: '指定当前的页码' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(int默认值20，最大值100)' }
                    ]
                },
                replybyme: {
                    name: '获取我回复的最新回复信息 v2',
                    docUrl: {type: '', url: '/v2replyment_atme.html'},
                    url: '/post/v2/replybyme',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索，当为空时则返回所有的动态更新' },
                        { key: 'max_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比max_id小的动态更新（即比max_id发表时间早的动态更新）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(int默认值20，最大值100)' }
                    ]
                },
                replyme: {
                    name: '获取回复我的最新回复信息 v2',
                    docUrl: {type: '', url: '/v2replyment_me.html'},
                    url: '/post/v2/replyme',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索，当为空时则返回所有的动态更新' },
                        { key: 'max_id', isMust: false, type: 'string', des: '若指定此参数，则只返回ID比max_id小的动态更新（即比max_id发表时间早的动态更新）(特殊，数据库内部处理)' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(int默认值20，最大值100)' }
                    ]
                },
                favorite: {
                    name: '获取当前登录用户收藏的动态更新 v2',
                    docUrl: {type: '', url: '/v2post.html'},
                    url: '/post/v2/favorite',
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
                    name: '获取群组的动态更新 v2',
                    docUrl: {type: '', url: '/v2post.html'},
                    url: '/post/v2/group',
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
                    name: '获取用户发布的动态更新 v2',
                    docUrl: {type: '', url: '/v2post.html'},
                    url: '/post/v2/user',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'u_id', isMust: true, type: 'string', des: '用户编号' },
                        { key: 'max_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比max_id小的动态更新（即比max_id发表时间早的动态更新）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(int默认值20，最大值100)' }
                    ]
                },
                doc: {
                    name: '获取文档列表信息 v2',
                    docUrl: {type: '', url: '/v2post_doc.html'},
                    url: '/post/v2/doc',
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
                    name: '获取图片列表信息 v2',
                    docUrl: {type: '', url: '/v2post_img.html'},
                    url: '/post/v2/img',
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
                    name: '获取问答列表信息 v2',
                    docUrl: {type: '', url: '/v2post_faq.html'},
                    url: '/post/v2/faq',
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
                    name: '获取全公司的置顶动态更新 v2',
                    docUrl: {type: '', url: '/v2post.html'},
                    url: '/post/v2/list_toppost',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' }
                    ]
                },
                detail: {
                    name: '根据动态更新编号获取单条动态更新内容 v2',
                    docUrl: {type: '', url: '/v2post_detail.html'},
                    url: '/post/v2/detail',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'p_id', isMust: true, type: 'string', des: '动态更新编号' }
                    ]
                },
                my: {
                    name: '获取当前登录用户发布的动态更新 v2',
                    docUrl: {type: '', url: '/v2post.html'},
                    url: '/post/v2/my',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索，当为空时则返回所有的动态更新' },
                        { key: 'post_type', isMust: false, type: 'int', des: '筛选动态更新类型,默认-1：表示全部动态；0：普通消息；1：链接；2：图片；3：文档；4：提问；7：投票；8：视频' },
                        { key: 'max_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比max_id小的动态更新（即比max_id发表时间早的动态更新）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(int默认值20，最大值100)' }
                    ]
                },
                tag: {
                    name: '获取某个标签下的动态更新 v2',
                    docUrl: {type: '', url: '/v2post.html'},
                    url: '/post/v2/tag',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'tag', isMust: true, type: 'string', des: '标签名称' },
                        { key: 'keywords', isMust: false, type: 'string', des: '关键词模糊搜索' },
                        { key: 'max_id', isMust: false, type: 'int64', des: '若指定此参数，则只返回ID比max_id小的动态更新（即比max_id发表时间早的动态更新）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数（默认值20，最大值100' }
                    ]
                },
                reply: {
                    name: '根据动态更新编号获取某条动态更新的回复列表信息 v2',
                    docUrl: {type: '', url: '/v2post_replyment.html'},
                    url: '/post/v2/reply',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'p_id', isMust: true, type: 'string', des: '动态更新编号' }
                    ]
                }
//                qa_thebestcomment: {
//                    name: '',
//                    docUrl: {type: '', url: ''},
//                    url: '/post/v2/qa_thebestcomment',
//                    requestMode: 'get',
//                    params: [
//                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
//                        { key: 'p_id', isMust: true, type: 'string', des: '动态更新编号' }
//                    ]
//                }
            }
        },
        calendar: {
            v1: {
                todo: {
                    name: '获取当前登录用户待办日程列表 ',
                    docUrl: {type: 'string', url: ''},
                    url: '/calendar/todo',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'rssCal', isMust: false, type: 'bool', des: '是否订阅待办日程。0表不订阅；以列表形式返回，1表示订阅，直接返回订阅链接url'},
                        { key: 'group', isMust: false, type: 'bool', des: '是否以日程的起始时间分组显示。0表不；以列表形式返回，1表示分组，以分组列表显示' },
                        { key: 'u_ids', isMust: false, type: 'string', des: '用户编号 查看其他同事的日程，多个以逗号相隔' }
                    ]
                },
                day: {
                    name: '获取当前登录用户某日日程列表 ',
                    docUrl: {type: '', url: '/v1calendar.html'},
                    url: '/calendar/day',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'date', isMust: false, type: 'string', des: '日期字符串。默认值为今天。如：2013-05-05。' },
                        { key: 'u_ids', isMust: false, type: 'string', des: '用户编号 查看其他同事的日程，多个以逗号相隔' }
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
                    name: '创建一个群组',
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
                        { key: 'deptID', isMust: false, type: 'int', des: '部门ID（如果设置官方群组需传关联的部门ID）' }
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
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数（默认值20，最大值100）' }
                    ]
                },
                detail: {
                    name: '根据群组编号获取群组的基本资料',
                    docUrl: {type: '', url: '/v1group_detail.html'},
                    url: '/group/detail',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'g_id', isMust: true, type: 'string', des: '群组编号' }
                    ]
                },
                my_created: {
                    name: '获取当前登录用户创建的群组',
                    docUrl: {type: '', url: '/v1group.html'},
                    url: '/group/my_created',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'u_id', isMust: false, type: 'string', des: '指定用户编号，获取此用户创建的群组，默认为当前授权用户' }
                    ]
                },
                my_joined: {
                    name: '获取当前登录用户加入的群组',
                    docUrl: {type: '', url: '/v1group.html'},
                    url: '/group/my_joined',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'u_id', isMust: false, type: 'string', des: '指定用户编号，获取此用户创建的群组，默认为当前授权用户' }
                    ]
                },
                user: {
                    name: '获取群组成员的用户信息',
                    docUrl: {type: '', url: '/v1user.html'},
                    url: '/group/user',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'g_id', isMust: false, type: 'string', des: '群组编号' }
                    ]
                },
                exit: {
                    name: '群组操作（退出、加入、关闭、开启、解散）',
                    docUrl: {type: '', url: ''},
                    url: '/group/exit',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'g_id', isMust: false, type: 'string', des: '群组编号' }
                    ]
                },
                invite: {
                    name: '邀请用户（同事邮箱）加入群组',
                    docUrl: {type: '', url: ''},
                    url: '/group/invite',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'g_id', isMust: false, type: 'string', des: '群组编号' }
                    ]
                }
            }
        },
        user: {
            v1: {
                get_my_friends: {
                    name: '获取我的好友',
                    docUrl: {type: '', url: '/v1user.html'},
                    url: '/user/get_my_friends',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'pageindex', isMust: false, type: 'int', des: '指定当前的页码（不指定页码返回所有）' },
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(默认值20，最大值100)' }
                    ]
                },
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
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(默认值20，最大值100)' }
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
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(默认值20，最大值100)' }
                    ]
                },
                detail: {
                    name: '根据用户编号获取用户的基本资料 *',
                    docUrl: {type: '', url: '/v1user_detail.html'},
                    url: '/user/detail',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'u_id', isMust: true, type: 'string', des: '要查询的用户编号' }
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
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(默认值20，最大值100)' }
                    ]
                },
                list: {
                    name: '根据用户序列获取用户列表信息 *',
                    docUrl: {type: '', url: '/v1user.html'},
                    url: '/user/list',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'u_ids', isMust: true, type: 'string', des: '用户编号，多个以逗号相隔' }
                    ]
                },
                get_managerUser: {
                    name: '根据用户编号获取用户的直属上级的信息 *',
                    docUrl: {type: '', url: '/v1user.html'},
                    url: '/user/get_managerUser',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'u_id', isMust: true, type: 'string', des: '要查询的用户编号 u_id为空则默认为当前授权用户' }
                    ]
                },
                get_managerUserTree: {
                    name: '根据用户编号获取用户的上级树的用户信息 *',
                    docUrl: {type: '', url: '/v1user.html'},
                    url: '/user/get_managerUserTree',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'u_id', isMust: true, type: 'string', des: '要查询的用户编号 u_id为空则默认为当前授权用户' }
                    ]
                },
                get_subordinateUsers: {
                    name: '根据用户编号获取用户的下级第一级的用户信息 *',
                    docUrl: {type: '', url: '/v1user.html'},
                    url: '/user/get_subordinateUsers',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'u_id', isMust: true, type: 'string', des: '要查询的用户编号 u_id为空则默认为当前授权用户' }
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
                        { key: 'uids', isMust: true, type: 'string', des: '下属ID 多个用逗号隔开' }
                    ]
                },
                department: {
                    name: '获取企业所有部门列表信息 *',
                    docUrl: {type: '', url: '/v1user_department.html'},
                    url: '/user/department',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' }
                    ]
                },
                work_site: {
                    name: '获取企业所有作业点列表信息 *',
                    docUrl: {type: '', url: '/v1user_worksite.html'},
                    url: '/user/department',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' }
                    ]
                },
                add_followed: {
                    name: '当前登录用户添加关注关系 *',
                    docUrl: {type: '', url: ''},
                    url: '/user/add_followed',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'u_id', isMust: true, type: 'string', des: '需要关注的用户编号' }
                    ]
                },
                delete_followed: {
                    name: '当前登录用户删除关注关系 * ',
                    docUrl: {type: '', url: ''},
                    url: '/user/delete_followed',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'u_id', isMust: true, type: 'string', des: '需要取消关注的用户编号' }
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
                        { key: 'msg', isMust: true, type: 'string', des: '邀请的消息' }
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
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(默认值20，最大值100)' }
                    ]
                },
                add_frequent: {
                    name: '当前登录用户添加常用关系 * ',
                    docUrl: {type: '', url: ''},
                    url: '/user/add_frequent',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'u_id', isMust: true, type: 'string', des: '需要添加为常用的用户编号' }
                    ]
                },
                delete_frequent: {
                    name: '当前登录用户删除常用关系 * ',
                    docUrl: {type: '', url: ''},
                    url: '/user/delete_frequent',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'u_id', isMust: true, type: 'string', des: '需要取消常用的用户编号' }
                    ]
                },
                invited_user: {
                    name: '获取当前用户邀请新人的记录 * ',
                    docUrl: {type: '', url: '/v1user.html'},
                    url: '/user/invited_user',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'status', isMust: false, type: 'int', des: '邀请记录状态 默认0：尚未获得回应的邀请；1：用户未确认；2：确认待审批；3：未通过审批；4成功' }
                    ]
                },
                again_inviteuser: {
                    name: '重新邀请新人 * ',
                    docUrl: {type: 'string', url: ''},
                    url: '/user/again_inviteuser',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'emails', isMust: false, type: 'string', des: '新邀请用户email 多个邮箱用逗号隔开' }
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
                        { key: 'tokens', isMust: true, type: 'string', des: '取消已邀请的用户token 多个token用逗号隔开' }
                    ]
                },
                get_userMetioned: {
                    name: '与我最常协作的用户列表信息 * ',
                    docUrl: {type: '', url: '/v1user.html'},
                    url: '/user/get_userMetioned',
                    requestMode: 'get',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' }
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
                        { key: 'pagesize', isMust: false, type: 'int', des: '指定要返回的记录条数(默认值20)' }
                    ]
                }

            },
            v2: {
                invite: {
                    name: '邀请新人 v2 ',
                    docUrl: {type: 'string', url: ''},
                    url: '/user/v2/invite',
                    requestMode: 'POST',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'emails', isMust: false, type: 'string', des: '邀请用户email 多个邮箱用逗号隔开' }
                    ]
                }
            }
        },
        vote: {
            v1: {
                create: {
                    name: '创建一个投票动态',
                    docUrl: {type: 'string', url: ''},
                    url: '/vote/create',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'p_msg', isMust: true, type: 'int', des: '动态更新内容(###userID###代表@某个人,$$$groupID$$$代表@某个群组，#标签内容#代表给动态定义标签)' },
                        { key: 'vote_options', isMust: true, type: 'string', des: '投票选项，如：a[Option]b[Option]c[Option] 代表有选项1:a；2:b;3:c 以此类推' },
                        { key: 'v_img', isMust: false, type: 'binary', des: '要上传的图片。图片仅支持JPEG,GIF,PNG,目前上传图片大小限制为<8M.' },
                        { key: 'v_img_options', isMust: false, type: 'string', des: '	要上传的图片对应的投票选项， 如：1,2 代表上传的两张图片是对应投票选项1和2' },
                        { key: 'vote_lasttime', isMust: false, type: 'string', des: '截止日期 默认明天的这时间' },
                        { key: 'available_number', isMust: false, type: 'int', des: '允许选择多少选项 默认1项 最多3项' },
                        { key: 'vote_anonymous	', isMust: false, type: 'bool', des: '是否匿名投票 默认0：不匿名；1：匿名' },
                        { key: 'vote_visble', isMust: false, type: 'bool', des: '	是否允许投票人员查看投票结果 0：不允许；1：允许 默认1允许' },
                        { key: 'g_id', isMust: false, type: 'string', des: '可为空，动态分享群组编号(多个群组用逗号隔开)' },
                        { key: 's_type', isMust: false, type: 'int', des: '分享范围 0表示分享给所有同事;1表示群内分享；2表示所有关注者和群组；3表示分享给自己； 默认0表示分享给所有同事' }
                    ]
                }
            }
        },
        passport: {
            v1: {
                detail: {
                    name: '创建一个投票动态',
                    docUrl: {type: 'string', url: ''},
                    url: '/vote/create',
                    requestMode: 'post',
                    params: [
                        { key: 'access_token', isMust: true, type: 'string', des: '当前登录用户访问令牌' },
                        { key: 'p_msg', isMust: true, type: 'int', des: '动态更新内容(###userID###代表@某个人,$$$groupID$$$代表@某个群组，#标签内容#代表给动态定义标签)' },
                        { key: 'vote_options', isMust: true, type: 'string', des: '投票选项，如：a[Option]b[Option]c[Option] 代表有选项1:a；2:b;3:c 以此类推' },
                        { key: 'v_img', isMust: false, type: 'binary', des: '要上传的图片。图片仅支持JPEG,GIF,PNG,目前上传图片大小限制为<8M.' },
                        { key: 'v_img_options', isMust: false, type: 'string', des: '	要上传的图片对应的投票选项， 如：1,2 代表上传的两张图片是对应投票选项1和2' },
                        { key: 'vote_lasttime', isMust: false, type: 'string', des: '截止日期 默认明天的这时间' },
                        { key: 'available_number', isMust: false, type: 'int', des: '允许选择多少选项 默认1项 最多3项' },
                        { key: 'vote_anonymous	', isMust: false, type: 'bool', des: '是否匿名投票 默认0：不匿名；1：匿名' },
                        { key: 'vote_visble', isMust: false, type: 'bool', des: '	是否允许投票人员查看投票结果 0：不允许；1：允许 默认1允许' },
                        { key: 'g_id', isMust: false, type: 'string', des: '可为空，动态分享群组编号(多个群组用逗号隔开)' },
                        { key: 's_type', isMust: false, type: 'int', des: '分享范围 0表示分享给所有同事;1表示群内分享；2表示所有关注者和群组；3表示分享给自己； 默认0表示分享给所有同事' }
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










