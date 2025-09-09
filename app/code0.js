gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.GDCatObjects1_1final = [];

gdjs.Untitled_32sceneCode.GDGreen_9595FloorObjects1_1final = [];

gdjs.Untitled_32sceneCode.GDTree_9595trunk_9595tiled_9595spriteObjects1_1final = [];

gdjs.Untitled_32sceneCode.GDGreen_9595FloorObjects1= [];
gdjs.Untitled_32sceneCode.GDGreen_9595FloorObjects2= [];
gdjs.Untitled_32sceneCode.GDCatObjects1= [];
gdjs.Untitled_32sceneCode.GDCatObjects2= [];
gdjs.Untitled_32sceneCode.GDTree_9595trunk_9595tiled_9595spriteObjects1= [];
gdjs.Untitled_32sceneCode.GDTree_9595trunk_9595tiled_9595spriteObjects2= [];
gdjs.Untitled_32sceneCode.GDScore_9595textObjects1= [];
gdjs.Untitled_32sceneCode.GDScore_9595textObjects2= [];
gdjs.Untitled_32sceneCode.GDEmpty_9595Cloud_9595BackgroundObjects1= [];
gdjs.Untitled_32sceneCode.GDEmpty_9595Cloud_9595BackgroundObjects2= [];
gdjs.Untitled_32sceneCode.GDGreyButtonObjects1= [];
gdjs.Untitled_32sceneCode.GDGreyButtonObjects2= [];


gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDCatObjects2Objects = Hashtable.newFrom({"Cat": gdjs.Untitled_32sceneCode.GDCatObjects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDTree_95959595trunk_95959595tiled_95959595spriteObjects2Objects = Hashtable.newFrom({"Tree_trunk_tiled_sprite": gdjs.Untitled_32sceneCode.GDTree_9595trunk_9595tiled_9595spriteObjects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDGreyButtonObjects1Objects = Hashtable.newFrom({"GreyButton": gdjs.Untitled_32sceneCode.GDGreyButtonObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDTree_95959595trunk_95959595tiled_95959595spriteObjects1Objects = Hashtable.newFrom({"Tree_trunk_tiled_sprite": gdjs.Untitled_32sceneCode.GDTree_9595trunk_9595tiled_9595spriteObjects1});
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Cat"), gdjs.Untitled_32sceneCode.GDCatObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDCatObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDCatObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDCatObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDCatObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDCatObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDCatObjects1[i].getBehavior("Animation").setAnimationName("Fall");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Any_Button_pressed.func(runtimeScene, 1, null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9915996);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cat"), gdjs.Untitled_32sceneCode.GDCatObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDCatObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDCatObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "242d0e8d696e1f0577e7b4875f1d2c0f3a9a4d095de74727291077e1e833c2b6_Jump 5.aac", false, 100, gdjs.randomWithStep(0.8, 1.2, 0.2));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "Create Wall", 3, null);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "Walls", gdjs.evtTools.camera.getCameraBorderRight(runtimeScene, "", 0), gdjs.evtTools.camera.getCameraBorderTop(runtimeScene, "", 0) + gdjs.randomInRange(-(7) * 32, 7 * 32), 3);
}}

}


{

gdjs.Untitled_32sceneCode.GDCatObjects1.length = 0;

gdjs.Untitled_32sceneCode.GDGreen_9595FloorObjects1.length = 0;

gdjs.Untitled_32sceneCode.GDTree_9595trunk_9595tiled_9595spriteObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Untitled_32sceneCode.GDCatObjects1_1final.length = 0;
gdjs.Untitled_32sceneCode.GDGreen_9595FloorObjects1_1final.length = 0;
gdjs.Untitled_32sceneCode.GDTree_9595trunk_9595tiled_9595spriteObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Cat"), gdjs.Untitled_32sceneCode.GDCatObjects2);
gdjs.copyArray(runtimeScene.getObjects("Tree_trunk_tiled_sprite"), gdjs.Untitled_32sceneCode.GDTree_9595trunk_9595tiled_9595spriteObjects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDCatObjects2Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDTree_95959595trunk_95959595tiled_95959595spriteObjects2Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDCatObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDCatObjects1_1final.indexOf(gdjs.Untitled_32sceneCode.GDCatObjects2[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDCatObjects1_1final.push(gdjs.Untitled_32sceneCode.GDCatObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDTree_9595trunk_9595tiled_9595spriteObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDTree_9595trunk_9595tiled_9595spriteObjects1_1final.indexOf(gdjs.Untitled_32sceneCode.GDTree_9595trunk_9595tiled_9595spriteObjects2[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDTree_9595trunk_9595tiled_9595spriteObjects1_1final.push(gdjs.Untitled_32sceneCode.GDTree_9595trunk_9595tiled_9595spriteObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Cat"), gdjs.Untitled_32sceneCode.GDCatObjects2);
gdjs.copyArray(runtimeScene.getObjects("Green_Floor"), gdjs.Untitled_32sceneCode.GDGreen_9595FloorObjects2);
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDCatObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDCatObjects2[i].getAABBBottom() > (( gdjs.Untitled_32sceneCode.GDGreen_9595FloorObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDGreen_9595FloorObjects2[0].getAABBTop()) ) {
        isConditionTrue_1 = true;
        gdjs.Untitled_32sceneCode.GDCatObjects2[k] = gdjs.Untitled_32sceneCode.GDCatObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDCatObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDCatObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDCatObjects1_1final.indexOf(gdjs.Untitled_32sceneCode.GDCatObjects2[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDCatObjects1_1final.push(gdjs.Untitled_32sceneCode.GDCatObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDGreen_9595FloorObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDGreen_9595FloorObjects1_1final.indexOf(gdjs.Untitled_32sceneCode.GDGreen_9595FloorObjects2[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDGreen_9595FloorObjects1_1final.push(gdjs.Untitled_32sceneCode.GDGreen_9595FloorObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDCatObjects1_1final, gdjs.Untitled_32sceneCode.GDCatObjects1);
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDGreen_9595FloorObjects1_1final, gdjs.Untitled_32sceneCode.GDGreen_9595FloorObjects1);
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDTree_9595trunk_9595tiled_9595spriteObjects1_1final, gdjs.Untitled_32sceneCode.GDTree_9595trunk_9595tiled_9595spriteObjects1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDCatObjects1 */
gdjs.Untitled_32sceneCode.GDGreyButtonObjects1.length = 0;

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDCatObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDCatObjects1[i].activateBehavior("PlatformerObject", false);
}
}{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDGreyButtonObjects1Objects, gdjs.evtTools.camera.getCameraX(runtimeScene, "UI", 0) - 100, gdjs.evtTools.camera.getCameraY(runtimeScene, "UI", 0) - 50, "UI");
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDCatObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDCatObjects1[i].getBehavior("Animation").setAnimationName("Dead");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cat"), gdjs.Untitled_32sceneCode.GDCatObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tree_trunk_tiled_sprite"), gdjs.Untitled_32sceneCode.GDTree_9595trunk_9595tiled_9595spriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDTree_9595trunk_9595tiled_9595spriteObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDTree_9595trunk_9595tiled_9595spriteObjects1[i].getCenterXInScene() < (( gdjs.Untitled_32sceneCode.GDCatObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDCatObjects1[0].getCenterXInScene()) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDTree_9595trunk_9595tiled_9595spriteObjects1[k] = gdjs.Untitled_32sceneCode.GDTree_9595trunk_9595tiled_9595spriteObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDTree_9595trunk_9595tiled_9595spriteObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Score_text"), gdjs.Untitled_32sceneCode.GDScore_9595textObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDScore_9595textObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDScore_9595textObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.object.getPickedInstancesCount(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDTree_95959595trunk_95959595tiled_95959595spriteObjects1Objects) / 2));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreyButton"), gdjs.Untitled_32sceneCode.GDGreyButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDGreyButtonObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDGreyButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDGreyButtonObjects1[k] = gdjs.Untitled_32sceneCode.GDGreyButtonObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDGreyButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "d9fa2f9e35959696723710be864b3d250deb4e5a3fa353adb0a3272dddc03a45_33 - adventure cats pirate radio.aac", true, 90, 1);
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDGreen_9595FloorObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGreen_9595FloorObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCatObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCatObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDTree_9595trunk_9595tiled_9595spriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDTree_9595trunk_9595tiled_9595spriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDScore_9595textObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDScore_9595textObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDEmpty_9595Cloud_9595BackgroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDEmpty_9595Cloud_9595BackgroundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGreyButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGreyButtonObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);
gdjs.Untitled_32sceneCode.GDGreen_9595FloorObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGreen_9595FloorObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCatObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCatObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDTree_9595trunk_9595tiled_9595spriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDTree_9595trunk_9595tiled_9595spriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDScore_9595textObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDScore_9595textObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDEmpty_9595Cloud_9595BackgroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDEmpty_9595Cloud_9595BackgroundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGreyButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGreyButtonObjects2.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
