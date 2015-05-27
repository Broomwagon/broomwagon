/**
 * Each view are defined as state.
 * Initial there are written state for all view in theme.
 *
 */
function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, IdleProvider, KeepaliveProvider) {

    // Configure Idle settings
    IdleProvider.idle(5); // in seconds
    IdleProvider.timeout(120); // in seconds

    $urlRouterProvider.otherwise("/dashboards/dashboard_1");

    $ocLazyLoadProvider.config({
        // Set to true if you want to see what and when is dynamically loaded
        debug: true
    });

    $stateProvider
        .state('dashboards', {
            abstract: true,
            url: "/dashboards",
            templateUrl: "/admin/common/content.html"
        })
        .state('dashboards.dashboard_1', {
            url: "/dashboard_1",
            templateUrl: "/admin/dashboard_1.html",
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {

                            serie: true,
                            name: 'angular-flot',
                            files: [ '/admin/js/plugins/flot/jquery.flot.js', '/admin/js/plugins/flot/jquery.flot.time.js', '/admin/js/plugins/flot/jquery.flot.tooltip.min.js', '/admin/js/plugins/flot/jquery.flot.spline.js', '/admin/js/plugins/flot/jquery.flot.resize.js', '/admin/js/plugins/flot/jquery.flot.pie.js', '/admin/js/plugins/flot/curvedLines.js', '/admin/js/plugins/flot/angular-flot.js', ]
                        },
                        {
                            name: 'angles',
                            files: ['/admin/js/plugins/chartJs/angles.js', '/admin/js/plugins/chartJs/Chart.min.js']
                        },
                        {
                            name: 'angular-peity',
                            files: ['/admin/js/plugins/peity/jquery.peity.min.js', '/admin/js/plugins/peity/angular-peity.js']
                        }
                    ]);
                }
            }
        })
        .state('dashboards.dashboard_2', {
            url: "/dashboard_2",
            templateUrl: "/admin/dashboard_2.html",
            data: { pageTitle: 'Dashboard 2' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            serie: true,
                            name: 'angular-flot',
                            files: [ '/admin/js/plugins/flot/jquery.flot.js', '/admin/js/plugins/flot/jquery.flot.time.js', '/admin/js/plugins/flot/jquery.flot.tooltip.min.js', '/admin/js/plugins/flot/jquery.flot.spline.js', '/admin/js/plugins/flot/jquery.flot.resize.js', '/admin/js/plugins/flot/jquery.flot.pie.js', '/admin/js/plugins/flot/curvedLines.js', '/admin/js/plugins/flot/angular-flot.js', ]
                        },
                        {
                            files: ['/admin/js/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js']
                        },
                        {
                            files: ['/admin/js/plugins/jvectormap/jquery-jvectormap-world-mill-en.js']
                        },
                        {
                            name: 'ui.checkbox',
                            files: ['/admin/js/bootstrap/angular-bootstrap-checkbox.js']
                        }
                    ]);
                }
            }
        })
        .state('dashboards.dashboard_3', {
            url: "/dashboard_3",
            templateUrl: "/admin/dashboard_3.html",
            data: { pageTitle: 'Dashboard 3' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'angles',
                            files: ['/admin/js/plugins/chartJs/angles.js', '/admin/js/plugins/chartJs/Chart.min.js']
                        },
                        {
                            name: 'angular-peity',
                            files: ['/admin/js/plugins/peity/jquery.peity.min.js', '/admin/js/plugins/peity/angular-peity.js']
                        },
                        {
                            name: 'ui.checkbox',
                            files: ['/admin/js/bootstrap/angular-bootstrap-checkbox.js']
                        }
                    ]);
                }
            }
        })
        .state('dashboards_top', {
            abstract: true,
            url: "/dashboards_top",
            templateUrl: "/admin/common/content_top_navigation.html",
        })
        .state('dashboards_top.dashboard_4', {
            url: "/dashboard_4",
            templateUrl: "/admin/dashboard_4.html",
            data: { pageTitle: 'Dashboard 4' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'angles',
                            files: ['/admin/js/plugins/chartJs/angles.js', '/admin/js/plugins/chartJs/Chart.min.js']
                        },
                        {
                            name: 'angular-peity',
                            files: ['/admin/js/plugins/peity/jquery.peity.min.js', '/admin/js/plugins/peity/angular-peity.js']
                        },
                        {
                            serie: true,
                            name: 'angular-flot',
                            files: [ '/admin/js/plugins/flot/jquery.flot.js', '/admin/js/plugins/flot/jquery.flot.time.js', '/admin/js/plugins/flot/jquery.flot.tooltip.min.js', '/admin/js/plugins/flot/jquery.flot.spline.js', '/admin/js/plugins/flot/jquery.flot.resize.js', '/admin/js/plugins/flot/jquery.flot.pie.js', '/admin/js/plugins/flot/curvedLines.js', '/admin/js/plugins/flot/angular-flot.js', ]
                        }
                    ]);
                }
            }
        })
        .state('dashboards.dashboard_4_1', {
            url: "/dashboard_4_1",
            templateUrl: "/admin/dashboard_4_1.html",
            data: { pageTitle: 'Dashboard 4' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'angles',
                            files: ['/admin/js/plugins/chartJs/angles.js', '/admin/js/plugins/chartJs/Chart.min.js']
                        },
                        {
                            name: 'angular-peity',
                            files: ['/admin/js/plugins/peity/jquery.peity.min.js', '/admin/js/plugins/peity/angular-peity.js']
                        },
                        {
                            serie: true,
                            name: 'angular-flot',
                            files: [ '/admin/js/plugins/flot/jquery.flot.js', '/admin/js/plugins/flot/jquery.flot.time.js', '/admin/js/plugins/flot/jquery.flot.tooltip.min.js', '/admin/js/plugins/flot/jquery.flot.spline.js', '/admin/js/plugins/flot/jquery.flot.resize.js', '/admin/js/plugins/flot/jquery.flot.pie.js', '/admin/js/plugins/flot/curvedLines.js', '/admin/js/plugins/flot/angular-flot.js', ]
                        }
                    ]);
                }
            }
        })
        .state('layouts', {
            url: "/layouts",
            templateUrl: "/admin/layouts.html",
            data: { pageTitle: 'Layouts' },
        })
        .state('charts', {
            abstract: true,
            url: "/charts",
            templateUrl: "/admin/common/content.html",
        })
        .state('charts.flot_chart', {
            url: "/flot_chart",
            templateUrl: "/admin/graph_flot.html",
            data: { pageTitle: 'Flot chart' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            serie: true,
                            name: 'angular-flot',
                            files: [ '/admin/js/plugins/flot/jquery.flot.js', '/admin/js/plugins/flot/jquery.flot.time.js', '/admin/js/plugins/flot/jquery.flot.tooltip.min.js', '/admin/js/plugins/flot/jquery.flot.spline.js', '/admin/js/plugins/flot/jquery.flot.resize.js', '/admin/js/plugins/flot/jquery.flot.pie.js', '/admin/js/plugins/flot/curvedLines.js', '/admin/js/plugins/flot/angular-flot.js', ]
                        }
                    ]);
                }
            }
        })
        .state('charts.rickshaw_chart', {
            url: "/rickshaw_chart",
            templateUrl: "/admin/graph_rickshaw.html",
            data: { pageTitle: 'Rickshaw chart' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            reconfig: true,
                            serie: true,
                            files: ['/admin/js/plugins/rickshaw/vendor/d3.v3.js','/admin/js/plugins/rickshaw/rickshaw.min.js']
                        },
                        {
                            reconfig: true,
                            name: 'angular-rickshaw',
                            files: ['/admin/js/plugins/rickshaw/angular-rickshaw.js']
                        }
                    ]);
                }
            }
        })
        .state('charts.peity_chart', {
            url: "/peity_chart",
            templateUrl: "/admin/graph_peity.html",
            data: { pageTitle: 'Peity graphs' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'angular-peity',
                            files: ['/admin/js/plugins/peity/jquery.peity.min.js', '/admin/js/plugins/peity/angular-peity.js']
                        }
                    ]);
                }
            }
        })
        .state('charts.sparkline_chart', {
            url: "/sparkline_chart",
            templateUrl: "/admin/graph_sparkline.html",
            data: { pageTitle: 'Sparkline chart' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['/admin/js/plugins/sparkline/jquery.sparkline.min.js']
                        }
                    ]);
                }
            }
        })
        .state('charts.chartjs_chart', {
            url: "/chartjs_chart",
            templateUrl: "/admin/chartjs.html",
            data: { pageTitle: 'Chart.js' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['/admin/js/plugins/chartJs/Chart.min.js']
                        },
                        {
                            name: 'angles',
                            files: ['/admin/js/plugins/chartJs/angles.js']
                        }
                    ]);
                }
            }
        })
        .state('mailbox', {
            abstract: true,
            url: "/mailbox",
            templateUrl: "/admin/common/content.html",
        })
        .state('mailbox.inbox', {
            url: "/inbox",
            templateUrl: "/admin/mailbox.html",
            data: { pageTitle: 'Mail Inbox' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['css/plugins/iCheck/custom.css','/admin/js/plugins/iCheck/icheck.min.js']
                        }
                    ]);
                }
            }
        })
        .state('mailbox.email_view', {
            url: "/email_view",
            templateUrl: "/admin/mail_detail.html",
            data: { pageTitle: 'Mail detail' }
        })
        .state('mailbox.email_compose', {
            url: "/email_compose",
            templateUrl: "/admin/mail_compose.html",
            data: { pageTitle: 'Mail compose' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['css/plugins/summernote/summernote.css','css/plugins/summernote/summernote-bs3.css','/admin/js/plugins/summernote/summernote.min.js']
                        },
                        {
                            name: 'summernote',
                            files: ['css/plugins/summernote/summernote.css','css/plugins/summernote/summernote-bs3.css','/admin/js/plugins/summernote/summernote.min.js','/admin/js/plugins/summernote/angular-summernote.min.js']
                        }
                    ]);
                }
            }
        })
        .state('mailbox.email_template', {
            url: "/email_template",
            templateUrl: "/admin/email_template.html",
            data: { pageTitle: 'Mail compose' }
        })
        .state('widgets', {
            url: "/widgets",
            templateUrl: "/admin/widgets.html",
            data: { pageTitle: 'Widhets' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            serie: true,
                            name: 'angular-flot',
                            files: [ '/admin/js/plugins/flot/jquery.flot.js', '/admin/js/plugins/flot/jquery.flot.time.js', '/admin/js/plugins/flot/jquery.flot.tooltip.min.js', '/admin/js/plugins/flot/jquery.flot.spline.js', '/admin/js/plugins/flot/jquery.flot.resize.js', '/admin/js/plugins/flot/jquery.flot.pie.js', '/admin/js/plugins/flot/curvedLines.js', '/admin/js/plugins/flot/angular-flot.js', ]
                        },
                        {
                            files: ['css/plugins/iCheck/custom.css','/admin/js/plugins/iCheck/icheck.min.js']
                        },
                        {
                            files: ['/admin/js/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js','/admin/js/plugins/jvectormap/jquery-jvectormap-world-mill-en.js']
                        },
                        {
                            name: 'ui.checkbox',
                            files: ['/admin/js/bootstrap/angular-bootstrap-checkbox.js']
                        }
                    ]);
                }
            }
        })
        .state('forms', {
            abstract: true,
            url: "/forms",
            templateUrl: "/admin/common/content.html",
        })
        .state('forms.basic_form', {
            url: "/basic_form",
            templateUrl: "/admin/form_basic.html",
            data: { pageTitle: 'Basic form' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['css/plugins/iCheck/custom.css','/admin/js/plugins/iCheck/icheck.min.js']
                        }
                    ]);
                }
            }
        })
        .state('forms.advanced_plugins', {
            url: "/advanced_plugins",
            templateUrl: "/admin/form_advanced.html",
            data: { pageTitle: 'Advanced form' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'ui.knob',
                            files: ['/admin/js/plugins/jsKnob/jquery.knob.js','/admin/js/plugins/jsKnob/angular-knob.js']
                        },
                        {
                            files: ['css/plugins/ionRangeSlider/ion.rangeSlider.css','css/plugins/ionRangeSlider/ion.rangeSlider.skinFlat.css','/admin/js/plugins/ionRangeSlider/ion.rangeSlider.min.js']
                        },
                        {
                            insertBefore: '#loadBefore',
                            name: 'localytics.directives',
                            files: ['css/plugins/chosen/chosen.css','/admin/js/plugins/chosen/chosen.jquery.js','/admin/js/plugins/chosen/chosen.js']
                        },
                        {
                            name: 'nouislider',
                            files: ['css/plugins/nouslider/jquery.nouislider.css','/admin/js/plugins/nouslider/jquery.nouislider.min.js','/admin/js/plugins/nouslider/angular-nouislider.js']
                        },
                        {
                            name: 'datePicker',
                            files: ['css/plugins/datapicker/angular-datapicker.css','/admin/js/plugins/datapicker/datePicker.js']
                        },
                        {
                            files: ['/admin/js/plugins/jasny/jasny-bootstrap.min.js']
                        },
                        {
                            name: 'ui.switchery',
                            files: ['css/plugins/switchery/switchery.css','/admin/js/plugins/switchery/switchery.js','/admin/js/plugins/switchery/ng-switchery.js']
                        },
                        {
                            name: 'colorpicker.module',
                            files: ['css/plugins/colorpicker/colorpicker.css','/admin/js/plugins/colorpicker/bootstrap-colorpicker-module.js']
                        },
                        {
                            name: 'ngImgCrop',
                            files: ['/admin/js/plugins/ngImgCrop/ng-img-crop.js','css/plugins/ngImgCrop/ng-img-crop.css']
                        }

                    ]);
                }
            }
        })
        .state('forms.wizard', {
            url: "/wizard",
            templateUrl: "/admin/form_wizard.html",
            controller: wizardCtrl,
            data: { pageTitle: 'Wizard form' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['css/plugins/steps/jquery.steps.css']
                        }
                    ]);
                }
            }
        })
        .state('forms.wizard.step_one', {
            url: '/step_one',
            templateUrl: '/admin/wizard/step_one.html',
            data: { pageTitle: 'Wizard form' }
        })
        .state('forms.wizard.step_two', {
            url: '/step_two',
            templateUrl: '/admin/wizard/step_two.html',
            data: { pageTitle: 'Wizard form' }
        })
        .state('forms.wizard.step_three', {
            url: '/step_three',
            templateUrl: '/admin/wizard/step_three.html',
            data: { pageTitle: 'Wizard form' }
        })
        .state('forms.file_upload', {
            url: "/file_upload",
            templateUrl: "/admin/form_file_upload.html",
            data: { pageTitle: 'File upload' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['css/plugins/dropzone/basic.css','css/plugins/dropzone/dropzone.css','/admin/js/plugins/dropzone/dropzone.js']
                        }
                    ]);
                }
            }
        })
        .state('forms.text_editor', {
            url: "/text_editor",
            templateUrl: "/admin/form_editors.html",
            data: { pageTitle: 'Text editor' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'summernote',
                            files: ['css/plugins/summernote/summernote.css','css/plugins/summernote/summernote-bs3.css','/admin/js/plugins/summernote/summernote.min.js','/admin/js/plugins/summernote/angular-summernote.min.js']
                        }
                    ]);
                }
            }
        })
        .state('app', {
            abstract: true,
            url: "/app",
            templateUrl: "/admin/common/content.html",
        })
        .state('app.contacts', {
            url: "/contacts",
            templateUrl: "/admin/contacts.html",
            data: { pageTitle: 'Contacts' }
        })
        .state('app.profile', {
            url: "/profile",
            templateUrl: "/admin/profile.html",
            data: { pageTitle: 'Profile' }
        })
        .state('app.projects', {
            url: "/projects",
            templateUrl: "/admin/projects.html",
            data: { pageTitle: 'Projects' }
        })
        .state('app.project_detail', {
            url: "/project_detail",
            templateUrl: "/admin/project_detail.html",
            data: { pageTitle: 'Project detail' }
        })
        .state('app.file_manager', {
            url: "/file_manager",
            templateUrl: "/admin/file_manager.html",
            data: { pageTitle: 'File manager' }
        })
        .state('app.calendar', {
            url: "/calendar",
            templateUrl: "/admin/calendar.html",
            data: { pageTitle: 'Calendar' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            insertBefore: '#loadBefore',
                            files: ['css/plugins/fullcalendar/fullcalendar.css','/admin/js/plugins/fullcalendar/fullcalendar.min.js','/admin/js/plugins/fullcalendar/gcal.js']
                        },
                        {
                            name: 'ui.calendar',
                            files: ['/admin/js/plugins/fullcalendar/calendar.js']
                        }
                    ]);
                }
            }
        })
        .state('app.faq', {
            url: "/faq",
            templateUrl: "/admin/faq.html",
            data: { pageTitle: 'FAQ' }
        })
        .state('app.timeline', {
            url: "/timeline",
            templateUrl: "/admin/timeline.html",
            data: { pageTitle: 'Timeline' }
        })
        .state('app.pin_board', {
            url: "/pin_board",
            templateUrl: "/admin/pin_board.html",
            data: { pageTitle: 'Pin board' }
        })
        .state('app.invoice', {
            url: "/invoice",
            templateUrl: "/admin/invoice.html",
            data: { pageTitle: 'Invoice' }
        })
        .state('app.blog', {
            url: "/blog",
            templateUrl: "/admin/blog.html",
            data: { pageTitle: 'Blog' }
        })
        .state('app.article', {
            url: "/article",
            templateUrl: "/admin/article.html",
            data: { pageTitle: 'Article' }
        })
        .state('app.issue_tracker', {
            url: "/issue_tracker",
            templateUrl: "/admin/issue_tracker.html",
            data: { pageTitle: 'Issue Tracker' }
        })
        .state('app.clients', {
            url: "/clients",
            templateUrl: "/admin/clients.html",
            data: { pageTitle: 'Clients' }
        })
        .state('app.teams_board', {
            url: "/teams_board",
            templateUrl: "/admin/teams_board.html",
            data: { pageTitle: 'Teams board' }
        })
        .state('pages', {
            abstract: true,
            url: "/pages",
            templateUrl: "/admin/common/content.html",
        })
        .state('pages.search_results', {
            url: "/search_results",
            templateUrl: "/admin/search_results.html",
            data: { pageTitle: 'Search results' }
        })
        .state('pages.empy_page', {
            url: "/empy_page",
            templateUrl: "/admin/empty_page.html",
            data: { pageTitle: 'Empty page' }
        })
        .state('ui', {
            abstract: true,
            url: "/ui",
            templateUrl: "/admin/common/content.html",
        })
        .state('ui.typography', {
            url: "/typography",
            templateUrl: "/admin/typography.html",
            data: { pageTitle: 'Typography' }
        })
        .state('ui.icons', {
            url: "/icons",
            templateUrl: "/admin/icons.html",
            data: { pageTitle: 'Icons' }
        })
        .state('ui.buttons', {
            url: "/buttons",
            templateUrl: "/admin/buttons.html",
            data: { pageTitle: 'Buttons' }
        })
        .state('ui.tabs_panels', {
            url: "/tabs_panels",
            templateUrl: "/admin/tabs_panels.html",
            data: { pageTitle: 'Tabs and panels' }
        })
        .state('ui.notifications_tooltips', {
            url: "/notifications_tooltips",
            templateUrl: "/admin/notifications.html",
            data: { pageTitle: 'Notifications and tooltips' }
        })
        .state('ui.badges_labels', {
            url: "/badges_labels",
            templateUrl: "/admin/badges_labels.html",
            data: { pageTitle: 'Badges and labels and progress' }
        })
        .state('ui.video', {
            url: "/video",
            templateUrl: "/admin/video.html",
            data: { pageTitle: 'Responsible Video' }
        })
        .state('ui.draggable', {
            url: "/draggable",
            templateUrl: "/admin/draggable.html",
            data: { pageTitle: 'Draggable panels' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'ui.sortable',
                            files: ['/admin/js/plugins/ui-sortable/sortable.js']
                        }
                    ]);
                }
            }
        })
        .state('grid_options', {
            url: "/grid_options",
            templateUrl: "/admin/grid_options.html",
            data: { pageTitle: 'Grid options' }
        })
        .state('miscellaneous', {
            abstract: true,
            url: "/miscellaneous",
            templateUrl: "/admin/common/content.html",
        })
        .state('miscellaneous.google_maps', {
            url: "/google_maps",
            templateUrl: "/admin/google_maps.html",
            data: { pageTitle: 'Google maps' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'ui.event',
                            files: ['/admin/js/plugins/uievents/event.js']
                        },
                        {
                            name: 'ui.map',
                            files: ['/admin/js/plugins/uimaps/ui-map.js']
                        },
                    ]);
                }
            }
        })
        .state('miscellaneous.code_editor', {
            url: "/code_editor",
            templateUrl: "/admin/code_editor.html",
            data: { pageTitle: 'Code Editor' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            serie: true,
                            files: ['css/plugins/codemirror/codemirror.css','css/plugins/codemirror/ambiance.css','/admin/js/plugins/codemirror/codemirror.js','/admin/js/plugins/codemirror/mode/javascript/javascript.js']
                        },
                        {
                            name: 'ui.codemirror',
                            files: ['/admin/js/plugins/ui-codemirror/ui-codemirror.min.js']
                        }
                    ]);
                }
            }
        })
        .state('miscellaneous.modal_window', {
            url: "/modal_window",
            templateUrl: "/admin/modal_window.html",
            data: { pageTitle: 'Modal window' }
        })
        .state('miscellaneous.chat_view', {
            url: "/chat_view",
            templateUrl: "/admin/chat_view.html",
            data: { pageTitle: 'Chat view' }
        })
        .state('miscellaneous.nestable_list', {
            url: "/nestable_list",
            templateUrl: "/admin/nestable_list.html",
            data: { pageTitle: 'Nestable List' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'ui.tree',
                            files: ['css/plugins/uiTree/angular-ui-tree.min.css','/admin/js/plugins/uiTree/angular-ui-tree.min.js']
                        },
                    ]);
                }
            }
        })
        .state('miscellaneous.notify', {
            url: "/notify",
            templateUrl: "/admin/notify.html",
            data: { pageTitle: 'Notifications for angularJS' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'cgNotify',
                            files: ['css/plugins/angular-notify/angular-notify.min.css','/admin/js/plugins/angular-notify/angular-notify.min.js']
                        }
                    ]);
                }
            }
        })
        .state('miscellaneous.timeline_2', {
            url: "/timeline_2",
            templateUrl: "/admin/timeline_2.html",
            data: { pageTitle: 'Timeline version 2' }
        })
        .state('miscellaneous.forum_view', {
            url: "/forum_view",
            templateUrl: "/admin/forum_view.html",
            data: { pageTitle: 'Forum - general view' }
        })
        .state('miscellaneous.forum_post_view', {
            url: "/forum_post_view",
            templateUrl: "/admin/forum_post_view.html",
            data: { pageTitle: 'Forum - post view' }
        })
        .state('miscellaneous.diff', {
            url: "/diff",
            templateUrl: "/admin/diff.html",
            data: { pageTitle: 'Text Diff' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['/admin/js/plugins/diff_match_patch/javascript/diff_match_patch.js']
                        },
                        {
                            name: 'diff-match-patch',
                            files: ['/admin/js/plugins/angular-diff-match-patch/angular-diff-match-patch.js']
                        }
                    ]);
                }
            }
        })
        .state('miscellaneous.idle_timer', {
            url: "/idle_timer",
            templateUrl: "/admin/idle_timer.html",
            data: { pageTitle: 'Idle timer' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'cgNotify',
                            files: ['css/plugins/angular-notify/angular-notify.min.css','/admin/js/plugins/angular-notify/angular-notify.min.js']
                        }
                    ]);
                }
            }
        })
        .state('miscellaneous.live_favicon', {
            url: "/live_favicon",
            templateUrl: "/admin/live_favicon.html",
            data: { pageTitle: 'Live favicon' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['/admin/js/plugins/tinycon/tinycon.min.js']
                        }
                    ]);
                }
            }
        })
        .state('miscellaneous.spinners', {
            url: "/spinners",
            templateUrl: "/admin/spinners.html",
            data: { pageTitle: 'Spinners' }
        })
        .state('miscellaneous.validation', {
            url: "/validation",
            templateUrl: "/admin/validation.html",
            data: { pageTitle: 'Validation' }
        })
        .state('miscellaneous.agile_board', {
            url: "/agile_board",
            templateUrl: "/admin/agile_board.html",
            data: { pageTitle: 'Agile board' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'ui.sortable',
                            files: ['/admin/js/plugins/ui-sortable/sortable.js']
                        }
                    ]);
                }
            }
        })
        .state('tables', {
            abstract: true,
            url: "/tables",
            templateUrl: "/admin/common/content.html",
        })
        .state('tables.static_table', {
            url: "/static_table",
            templateUrl: "/admin/table_basic.html",
            data: { pageTitle: 'Static table' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'angular-peity',
                            files: ['/admin/js/plugins/peity/jquery.peity.min.js', '/admin/js/plugins/peity/angular-peity.js']
                        },
                        {
                            files: ['css/plugins/iCheck/custom.css','/admin/js/plugins/iCheck/icheck.min.js']
                        }
                    ]);
                }
            }
        })
        .state('tables.data_tables', {
            url: "/data_tables",
            templateUrl: "/admin/table_data_tables.html",
            data: { pageTitle: 'Data Tables' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            seria: true,
                            files: ['/admin/js/plugins/dataTables/jquery.dataTables.js','css/plugins/dataTables/dataTables.bootstrap.css']
                        },
                        {
                            files: ['/admin/js/plugins/dataTables/dataTables.bootstrap.js']
                        },
                        {
                            name: 'datatables',
                            files: ['/admin/js/plugins/dataTables/angular-datatables.min.js']
                        }
                    ]);
                }
            }
        })
        .state('tables.nggrid', {
            url: "/nggrid",
            templateUrl: "/admin/nggrid.html",
            data: { pageTitle: 'ng Grid' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'ngGrid',
                            files: ['/admin/js/plugins/nggrid/ng-grid-2.0.3.min.js']
                        },
                        {
                            insertBefore: '#loadBefore',
                            files: ['/admin/js/plugins/nggrid/ng-grid.css']
                        }
                    ]);
                }
            }
        })
        .state('gallery', {
            abstract: true,
            url: "/gallery",
            templateUrl: "/admin/common/content.html",
        })
        .state('gallery.basic_gallery', {
            url: "/basic_gallery",
            templateUrl: "/admin/basic_gallery.html",
            data: { pageTitle: 'Lightbox Gallery' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['/admin/js/plugins/blueimp/jquery.blueimp-gallery.min.js','css/plugins/blueimp/css/blueimp-gallery.min.css']
                        }
                    ]);
                }
            }
        })
        .state('gallery.bootstrap_carousel', {
            url: "/bootstrap_carousel",
            templateUrl: "/admin/carousel.html",
            data: { pageTitle: 'Bootstrap carousel' }
        })
        .state('css_animations', {
            url: "/css_animations",
            templateUrl: "/admin/css_animation.html",
            data: { pageTitle: 'CSS Animations' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            reconfig: true,
                            serie: true,
                            files: ['/admin/js/plugins/rickshaw/vendor/d3.v3.js','/admin/js/plugins/rickshaw/rickshaw.min.js']
                        },
                        {
                            reconfig: true,
                            name: 'angular-rickshaw',
                            files: ['/admin/js/plugins/rickshaw/angular-rickshaw.js']
                        }
                    ]);
                }
            }

        });
}
angular
    .module('broomwagon')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });
