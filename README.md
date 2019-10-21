# PRNC

Pull Request Number Commenter,

a bot which comment with a pull request number according to your customized message:

![Example](/example.png?raw=true)

For a message customization, create a `.github/prnc.yml` config:

```yml
message: |
  **Staging links:**
  https://deploy-preview-[[PR]]--staging.netlify.com
```

[ISC](LICENSE) © 2019 Oles Maiboroda <oles.maiboroda@gmail.com>
