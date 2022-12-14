# 🤖 discord-node-bot-boilerplate

<!-- all-shields/header-badges:START -->

[![v1.231022.1](https://img.shields.io/badge/version-v1.231022.1-lightgray.svg?style=flat&logo=)](https://github.com/alishd-boilerplate/discord-node-bot-boilerplate/blob/main/CHANGELOG.md) [![](https://img.shields.io/npm/v/@alishd/discord-node-bot-boilerplate?color=CC3534&logo=npm)](https://www.npmjs.com/package/@alishd/discord-node-bot-boilerplate) [![License: MIT](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat&logo=license)](https://github.com/alishd-boilerplate/discord-node-bot-boilerplate/blob/main/LICENSE.md) [![Language: TypeScript](https://img.shields.io/badge/language-typescript-blue.svg?style=flat&logo=typescript)](https://www.typescriptlang.org/) [![ECMAScript: 2019](https://img.shields.io/badge/ES-9-F7DF1E.svg?style=flat&logo=javascript)](https://github.com/tc39/ecma262)

<!-- all-shields/header-badges:END -->

Create your discord bot with this awesome boilerplate. Use this template for your bot.

This is a [github template](https://github.blog/2019-06-06-generate-new-repositories-with-repository-templates/), you can fork it or [use it as a template](https://github.com/alishd-boilerplate/discord-node-bot-boilerplate/generate) to start a new project with this repository as hello-world. Use this template to start ahead without losing time configuring your own!

A huge thanks goes to my friend [PTKdev](https://github.com/PTKdev) for giving me inspiration from his beautiful templates! Go check him out!

## 🎁 Support: Donate

> This project is **free**, **open source** and I try to provide excellent **free support**.

<!-- all-shields/sponsors-badges:START -->

[![Donate Paypal](https://img.shields.io/badge/donate-paypal-005EA6.svg?style=for-the-badge&logo=paypal)](https://www.paypal.me/alishadman95)

<!-- all-shields/sponsors-badges:END -->

## 📎 Menu

-   💡 [Features](#-features)
-   📚 [Documentation](#-documentation)
-   🔨 [Developer Mode](#-developer-mode)
-   -   🏁 [Run Project](#-run-project)
-   -   💾 [Setup Project](#-setup-project)
-   -   🚀 [Deploy](#-deploy)
-   👨‍💻 [Contributing](#-contributing)
-   🐛 [Known Bugs](https://github.com/alishd-boilerplate/discord-node-bot-boilerplate/issues?q=is%3Aopen+is%3Aissue+label%3Abug)

## 💡 Features

-   [✔️] Easy to use
-   [✔️] MIT License
-   [✔️] Make discord bot with node
-   [✔️] Friendly boilerplate + Github templates
-   [✔️] Optional MongoDB with Moongoose
-   [✔️] Optional rest api preconfigured
-   [✔️] Optional JWT Security
-   [✔️] Typescript + TSPaths preconfigured
-   [✔️] Userfriendly folders tree
-   [✔️] Prettify and ESLint preconfigured
-   [✔️] all-contributors-cli and all-shields-cli preconfigured
-   [✔️] JEST Test preconfigured
-   [✔️] Full async code
-   [✔️] Github and Vscode dotfiles preconfigured
-   [✔️] Translations: 🇬🇧 🇮🇹

## 🔨 Developer Mode

### 🏁 Run Project

1. Clone this repository or download [nightly](https://github.com/alishd-boilerplate/discord-node-bot-boilerplate/archive/nightly.zip), [beta](https://github.com/alishd-boilerplate/discord-node-bot-boilerplate/archive/beta.zip) or [stable](https://github.com/alishd-boilerplate/discord-node-bot-boilerplate/archive/main.zip).
2. Go to [@discord api](https://discord.com/developers/applications) and create a new bot (Obtain an API Key / CLIENT ID key / GUILD ID key)
3. Run `npm run init`
4. Run with correct values:
   `npm run configure --botkey name_bot --clientid 1234:asdfghjkl --guildid 1234:asdsfssad --mongodb 1234:3242342 --jwtsecret somesecretstring` (MongoDB and JWT are optional)
5. Run `npm run dev`

By default both MONGODB and a REST API are enabled, to disable them just use these commands:

`npm run enable-db dev`  
`npm run enable-api dev`  
`npm run disable-db dev`  
`npm run disable-api dev`

`npm run enable-db prod`  
`npm run enable-api prod`  
`npm run disable-db prod`  
`npm run disable-api prod`

### 💾 Setup Project

If you want to replace all strings (for example: package name, author, URLs, etc...) in the markdown file, source files and other files of this project you need to edit `setup.json` with the correct values and run `npm run setup`.

## 🚀 Deploy

Deploy bot to your server and:

1. Run `npm run init`
2. Run with correct values: `npm run configure --botkey name_bot --clientid 1234:asdfghjkl --guildid 1234:asdsfssad --mongodb 1234:3242342 --jwtsecret somesecretstring` (MongoDB and JWT are optional)
3. Generate release `npm run release`
4. Start bot `npm run start-pm2`

## 📚 Documentation

Run `npm run docs`

## 👨‍💻 Contributing

I love contributions! I will happily accept your pull request! Translations, grammatical corrections, code correction and suggestions. Remember to insert your name in `.all-contributorsrc` and `package.json` files.

Many thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="16.66%"><a href="https://alishd.dev"><img src="https://avatars.githubusercontent.com/u/50172746?s=400&u=c681fbe46cb0e3a866b3d19bdd2a96bfb21c7144&v=4?s=100" width="100px;" alt="Ali Shadman"/><br /><sub><b>Ali Shadman</b></sub></a><br /><a href="https://github.com/alishadman95/alishd-boilerplate/discord-node-bot-boilerplate/commits?author=alishd" title="Code">💻</a> <a href="#translation-alishd" title="Translation">🌍</a> <a href="https://github.com/alishadman95/alishd-boilerplate/discord-node-bot-boilerplate/commits?author=alishd" title="Documentation">📖</a> <a href="https://github.com/alishadman95/alishd-boilerplate/discord-node-bot-boilerplate/issues?q=author%3Aalishd" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="16.66%"><a href="https://ptk.dev"><img src="https://avatars1.githubusercontent.com/u/442844?v=4?s=100" width="100px;" alt="Patryk Rzucidło"/><br /><sub><b>Patryk Rzucidło</b></sub></a><br /><a href="https://github.com/alishadman95/alishd-boilerplate/discord-node-bot-boilerplate/commits?author=ptkdev" title="Code">💻</a> <a href="#translation-ptkdev" title="Translation">🌍</a> <a href="https://github.com/alishadman95/alishd-boilerplate/discord-node-bot-boilerplate/commits?author=ptkdev" title="Documentation">📖</a> <a href="https://github.com/alishadman95/alishd-boilerplate/discord-node-bot-boilerplate/issues?q=author%3Aptkdev" title="Bug reports">🐛</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## 🦄 Other Projects

<!-- all-shields/projects-badges1:START -->

[![](https://img.shields.io/badge/%F0%9F%8E%A8%20God%20bot-BOT-f1c40f.svg?style=flat&logo=)](https://github.com/alishadman95/godbot) [![](https://img.shields.io/badge/%F0%9F%91%94%20Boilerplate-BOT-f368e0.svg?style=flat&logo=)](https://github.com/alishd-boilerplate?q=bot)

<!-- all-shields/projects-badges1:END -->

## 💫 License

-   Code and Contributions have **MIT License**
-   Images and logos have **CC BY-NC 4.0 License**
-   Documentations and Translations have **CC BY 4.0 License**

###### Copyleft (c) 2022 [Ali Shadman](https://alishd.dev) <[support@@alishd.dev](mailto:support@@alishd.dev)>
