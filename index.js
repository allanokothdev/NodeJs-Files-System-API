const fs = require("fs");
const os = require("os");
const path = require("path");

//Reading a File
fs.access("file.js", fs.constants.F_OK, err => {
    console.log(err ? "Doesn't exist" : "Exists");
})

//  Reading file contents
fs.readFile("file.js", (err, data) => {
    if (!err) {
        console.log(data); // <Buffer ...>
    }
});

//  Reading a textfile with utf8 encoding
fs.readFile("file.js", "utf8", (err, data) => {
    if (!err) {
        console.log(data); // file content
    }
});


//  Reading directories
fs.readdir("some/dir", (err, entries) => {
    if(!err) {
        console.log(entries);
    }
})

//  Reading directories
fs.readdir("some/dir", { withFileTypes: true }, (err, entries) => {
    if (!err) {
        entries.forEach(entry => {
            console.log(entry.isFile()); // true
        });
    }
});


//  Reading links/source paths
fs.readlink("symlinkedFile.js", (err, link) => {
    if (!err) {
        console.log(link); // symlink source path 
    }
});


fs.open("file.js", "r+", fs.constants.O_RDWR, (err, fd) => {
    if (!err) {
        console.log(fd);
    }
});


fs.open("file.js", "r+", fs.constants.O_RDWR, (err, fd) => {
    if (!err) {
        fs.readFile(fd, "utf8", (err, data) => {
            if (!err) {
                console.log(data);
            }
        });
    }
});



fs.close(fd, () => {
    if (!err) {
        // ...
    }
});


//  Writing Files
fs.writeFile("file.js", "Data to be written", err => {
    if (!err) {
        console.log("Written");
    }
});



fs.appendFile("file.js", "Data to be appended", err => {
    if (!err) {
        console.log("Appended");
    }
});



fs.truncate("file.js", 10, err => {
    if (!err) {
        console.log("Truncated");
    }
});



fs.mkdir("my/new/dir", { recursive: true }, err => {
    if (!err) {
        console.log("Created");
    }
});


fs.mkdtemp(path.join(os.tmpdir(), "mydir"), (err, tempDir) => {
    if (!err) {
        console.log(tempDir); // e.g. /tmp/mydirY4ciGj on Linux
    }
});



fs.rmdir("dir/to/remove", err => {
    if (!err) {
        console.log("Removed");
    }
});



fs.symlink("target/to/symlink", "symlink/dir", err => {
    if (!err) {
        console.log("Symlinked");
    }
});



fs.link("target/to/link", "link/dir", err => {
    if (!err) {
        console.log("Linked");
    }
});



fs.unlink("link/dir", err => {
    if (!err) {
        console.log("Unlinked");
    }
});


fs.rename("file.js", "renamedFile.js", err => {
    if (!err) {
        console.log("Renamed");
    }
});


fs.copyFile("file.js", "dest.js", err => {
    if (!err) {
        console.log("Copied");
    }
});