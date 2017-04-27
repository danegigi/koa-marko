'use strict';
const path = require('path');

const renderer = (opts) => {
  const templateDir = opts.templateDir || __dirname;

  return async (ctx, next) => {
    ctx.marko = async (templateName, locals) => {
      const tmpl = require(path.join(templateDir, templateName));
      const data = Object.assign({}, ctx.state, locals);

      ctx.type = 'html';
      ctx.status = 200;
      ctx.body = await tmpl.stream(data);
    }
    await next();
  }
}

module.exports = renderer;
