import { danger, fail} from 'danger'

const currentMrAuthor = danger.gitlab.mr.author.username
const { modified_files, created_files, deleted_files } = danger.git
const allChangedFiles = [...modified_files, ...created_files, ...deleted_files]

const webAppFile = allChangedFiles.find(x=>x.indexOf('/web-app/')>-1)
if(webAppFile!==undefined && currentMrAuthor==='twomeetings1'){
  fail(`你没有权限提交代码到'web-app'项目，请先撤销相应文件修改，再尝试Merge Request的合并`)
}
