# github-oauth-app-example

> An example node application that implements GitHub OAuth2 API.

## Usage

> https://developer.github.com/apps/building-oauth-apps/creating-an-oauth-app/

1. [创建一个 OAuth 应用](https://github.com/settings/applications/new)
2. 复制 `.env.example` 到 `.env`
3. 修改 `.env` 文件内容为你刚刚创建的应用 id 和 secret
  ```
  GITHUB_OAUTH_CLIENT_ID=<your github oauth app client id>
  GITHUB_OAUTH_CLIENT_SECRET=<your github oauth app client secret>
  ```
4. 启动应用
  ```sh
  $ yarn dev
  ```

## Contributing

1. **Fork** it on GitHub!
2. **Clone** the fork to your own machine.
3. **Checkout** your feature branch: `git checkout -b my-awesome-feature`
4. **Commit** your changes to your own branch: `git commit -am 'Add some feature'`
5. **Push** your work back up to your fork: `git push -u origin my-awesome-feature`
6. Submit a **Pull Request** so that we can review your changes.

> **NOTE**: Be sure to merge the latest from "upstream" before making a pull request!

## License

[MIT](LICENSE) &copy; [汪磊](https://zce.me)



[downloads-image]: https://img.shields.io/npm/dm/oauth2-client-examples.svg
[downloads-url]: https://npmjs.org/package/oauth2-client-examples
[version-image]: https://img.shields.io/npm/v/oauth2-client-examples.svg
[version-url]: https://npmjs.org/package/oauth2-client-examples
[license-image]: https://img.shields.io/github/license/zce/oauth2-client-examples.svg
[license-url]: https://github.com/zce/oauth2-client-examples/blob/master/LICENSE
[dependency-image]: https://img.shields.io/david/zce/oauth2-client-examples.svg
[dependency-url]: https://david-dm.org/zce/oauth2-client-examples
[devdependency-image]: https://img.shields.io/david/dev/zce/oauth2-client-examples.svg
[devdependency-url]: https://david-dm.org/zce/oauth2-client-examples?type=dev
[style-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[style-url]: https://standardjs.com
