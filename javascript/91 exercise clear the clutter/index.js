// You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders

// for example, these files become:

// 1. name.jpg
// 2. name.png
// 3. this.pdf
// 4. harry.zip
// 5. Rohan.zip
// 6. cat.jpg
// 7. harry.pdf

// this:
// jpg/name.jpg, jpg/cat.jpg
// png/name.png
// pdf/this.pdf pdf/harry.pdf
// zip/harry.zip zip/Rohan.zip

const fs = require('fs').promises;
const path = require('path');

const files = [
    "d:/Kartik Khiriya/own/new/web dev/javascript/91 exercise clear the clutter/jpg.jpg",
    "d:/Kartik Khiriya/own/new/web dev/javascript/91 exercise clear the clutter/pdf.pdf",
    "d:/Kartik Khiriya/own/new/web dev/javascript/91 exercise clear the clutter/png.png",
    "d:/Kartik Khiriya/own/new/web dev/javascript/91 exercise clear the clutter/zip.zip"
];

const folderPaths = {
    ".jpg": "d:/Kartik Khiriya/own/new/web dev/javascript/91 exercise clear the clutter/jpg",
    ".png": "d:/Kartik Khiriya/own/new/web dev/javascript/91 exercise clear the clutter/png",
    ".pdf": "d:/Kartik Khiriya/own/new/web dev/javascript/91 exercise clear the clutter/pdf",
    ".zip": "d:/Kartik Khiriya/own/new/web dev/javascript/91 exercise clear the clutter/zip"
};

async function organizeFiles() {
    for (const [ext, folder] of Object.entries(folderPaths)) {
        try {
            await fs.mkdir(folder, { recursive: true });
            console.log(`${folder} created successfully!`);
        } catch (err) {
            console.error(`Error creating directory ${folder}:`, err);
        }
    }

    for (const file of files) {
        const ext = path.extname(file);
        const targetFolder = folderPaths[ext];

        if (targetFolder) {
            const targetPath = path.join(targetFolder, path.basename(file));

            try {
                await fs.rename(file, targetPath);
                console.log(`${file} moved to ${targetPath}`);
            } catch (err) {
                console.error(`Error moving ${file} to ${targetPath}:`, err);
            }
        } else {
            console.log(`No folder defined for extension ${ext}`);
        }
    }
}


organizeFiles();
