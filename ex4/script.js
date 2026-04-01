function tree(n) {
    printTreeTop(n);
    printTreeBottom(n);
}
function printTreeTop(n) {
    for (let i=1; i<=n; i++){
        let space = repeatchar(n-i, " ");
        let star = repeatchar(2*i-1, "*");
        console.log(space + star);
    }
}

function printTreeBottom(n) {
    for (let i=0; i<3; i++){
        let space = repeatchar(n-1, " ");
        console.log(space + "*");
    }
}

function repeatchar(n, arg_char) {
    let result = "";
    for (let i=0; i<n; i++){
        result += arg_char;
    }
    return result;
}

tree(4);