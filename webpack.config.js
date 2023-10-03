import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import { fileURLToPath } from 'url';
import projects from './src/project-data/project-list.js';

// restore commonJS path behavior
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const htmlWebpackPluginConfigs = [
  new HtmlWebpackPlugin({
    title: 'Portfolio',
    filename: '../index.html',
    template: './src/index.handlebars',
    chunks: ['index'],
  }),

  new HtmlWebpackPlugin({
    title: 'All Projects',
    filename: '../projects.html',
    template: './src/index.handlebars',
    chunks: ['projects'],
  }),
];

projects.forEach((project) => {
  htmlWebpackPluginConfigs.push(
    new HtmlWebpackPlugin({
      title: project.toUpperCase(),
      filename: `../project/${project}.html`,
      template: './src/index.handlebars',
      chunks: ['project'],
    }),
  );
});

export default {
  entry: {
    index: './src/index.js',
    projects: './src/sites/projects/projects.js',
    project: './src/sites/project/project.js',
  },

  mode: 'development',
  // mode: "production",

  devtool: 'inline-source-map',
  output: {
    filename: '[name]-[chunkhash].js',
    path: path.resolve(__dirname, 'dist/js'),
    clean: true,
  },

  plugins: htmlWebpackPluginConfigs,
  module: {
    rules: [
      { test: /\.handlebars$/, loader: 'handlebars-loader' },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader',
          },
          {
            loader: 'markdown-loader',
            options: {
              // Pass options to marked
              // See https://marked.js.org/using_advanced#options
              gfm: true,
            },
          },
        ],
      },
    ],
  },
};
