process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    var input = process.stdin.read();
    var instruction = input.toString().trim();
        switch(instruction) {
            case 'input !== null':
                process.stdout.write(input);
                break;
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
        };
}); 
console.log(process.version);
console.log(process.env);