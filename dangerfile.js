import { message , danger, fail} from 'danger'

const modifiedMD = danger.git.modified_files.join("- ")
message("Changed Files in this PR: \n - " + modifiedMD)
fail("Error Changed Files in this PR: \n - " + modifiedMD)