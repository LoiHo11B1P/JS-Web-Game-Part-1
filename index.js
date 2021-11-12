
const greenCharacter = 'assets/green-character.gif';
const bushyTree = 'assets/tree.png';
const stonePillar = 'assets/pillar.png';
const crateImg = 'assets/crate.png';
const wellImg = 'assets/well.png';
const treeImage = 'assets/pine-tree.png';
const swordImg = 'assets/sword.png';
const staffImg = 'assets/staff.png';
const sheildImg = 'assets/sheild.png';
const grassImg = 'assets/grass.png';
const skyImg = 'assets/sky.png';

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

function newImage (src, positionLeft, positionBottom) {
    // add an image at a specific cordinate

    let imgTemplate = document.createElement('img');
    imgTemplate.src = src;
    imgTemplate.style.position = 'fixed';
    imgTemplate.style.left = positionLeft;
    imgTemplate.style.bottom = positionBottom;
    document.body.append(imgTemplate);
    return imgTemplate;
}

function addPickupAbility (item) {
    // add pickup for an item  which will remove item from screen when it is click on

    item.addEventListener('click', function () {
        item.remove();
    })
}

function renderBackground(item, startPos, endPos) {
    // render from starting bottom possition to end position
    // n^2 run time

    //console.log(startPos)
    //console.log(endPos);
    let bot = startPos;
    let left = 0;
    for(;bot < endPos; bot+=100) {
        console.log(bot)
        for(; left < windowWidth; left+=100) {
            newImage(item, left+'px', bot+'px');
        }
        
        left = 0
    }
}

renderBackground(skyImg, windowHeight/2, windowHeight);
renderBackground(grassImg, 0, windowHeight/2);

newImage(greenCharacter, '100px', '100px');

newImage(treeImage, '450px', '200px');

newImage(bushyTree, '200px', '300px');

newImage(stonePillar, '350px', '100px');

newImage(crateImg, '150px', '200px');

newImage(wellImg, '500px', '425px');

const pickableSword = newImage(swordImg, '500px', '405px');
addPickupAbility(pickableSword);

const pickableStaff = newImage(staffImg, '600px', '100px');
addPickupAbility(pickableStaff);

const pickableSheild = newImage(sheildImg, '165px', '185px');
addPickupAbility(pickableSheild );

