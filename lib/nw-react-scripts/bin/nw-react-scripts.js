#!/usr/bin/env node

'use strict';

const program = require('commander');
const packageConfig = require('../package.json');

program
  .version(packageConfig.version);

program
  .command('start')
  .description('start')
  .option('--webpack <path>', 'webpack')
  .action(options => {
    process.env.NODE_ENV = 'development';

    const Builder = require('nwjs-builder-phoenix').Builder;

    const builder = new Builder();
    builder.build();
  });

program
  .command('build')
  .description('build')
  .option('--webpack <path>', 'webpack')
  .action(options => {
    process.env.NODE_ENV = 'production';

    const webpack = options.webpack;

    const Runner = require('nwjs-builder-phoenix').Runner;

    const runner = new Runner();
    runner.run();
  });

program
  .command('test')
  .description('test')
  .action(() => {
    console.log('test');
  });

program.parse(process.argv);
