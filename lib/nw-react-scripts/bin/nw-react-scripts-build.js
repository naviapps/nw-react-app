#!/usr/bin/env node

'use strict';

const program = require('commander');

program
  .option('--webpack <path>', 'webpack', '../config/webpack.config.prod')
  .parse(process.argv);

console.log('build');
