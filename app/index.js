const Generator = require('yeoman-generator')


module.exports = class extends Generator {
    prompting () {

        // Yeoman 在询问用户环节会自动调用此方法
        // 在此方法中可以调用父类的 prompt() 方法发出对用户的命令行询问
        return this.prompt([

            {
                type: 'input',

                name: 'name',

                message: 'Your project name',

                default: this.appname // appname 为项目生成目录名称

            }
        ])
        .then(answers => {

            // answers => { name: 'user input value' }
            this.answers = answers

        })
    }

    writing () {


        //使用模板引擎的方法，使用模板方式写入文件到目标目录
        //获取模板路径
        const tmpl = this.templatePath('fooanswer.txt')


        //输出目标路径
        const output = this.destinationPath('fooanswer.txt')  //在使用项目显示的文件名


        //模板数据
        const context = this.answers    
        //使用copyTpl把模板数据输出到目标路径
        this.fs.copyTpl(tmpl, output, context)
    }
}