const defaultMessage = 'Hi, you have opened PR #[[PR]]!'

/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Application} app
 */
module.exports = app => {
  // Your code here
  app.log('Yay, the app was loaded!')

  app.on('pull_request.opened', async context => {
    const config = await context.config('prnc.yml')

    const message = config ? config.message : defaultMessage
    
    const replacedMessage = message.replace(/\[\[PR\]\]/g, context.issue().number)

    const issueComment = context.issue({ body: replacedMessage })
    
    return context.github.issues.createComment(issueComment)
  })

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
}
