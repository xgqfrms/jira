"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2018.12.12
 * @modified 2018.12.12
 *
 * @description Jira Plugin for shit SVN template
 * @augments
 * @example
 *
 */

/*

[JIRA编号]
[修改内容]请添加文字描述
[提交类型]BUG修复/新功能/需求修改/版本制作/代码整理/解决编译不过/初次提交/阶段性递交/追加递交
[需要测试]是/否

*/

const options = {
    kind: "新功能",
    testing: true,
};

const SVNCommitCommentsAutoGenerator = (options = { kind: "无提交类型", testing: false, }, debug = false) => {
    let {
        kind,
        testing,
    } = options;
    let result = ``;
    let jiraId = document.querySelector(`[id="key-val"]`).innerText.trim();
    let type = document.querySelector(`[id="type-val"]`).innerText.trim();
    let summary = document.querySelector(`[id="summary-val"]`).innerText.trim();
    let description = document.querySelector(`[id="description-val"]>[class="user-content-block"]`).innerText.trim();
    let test = testing ? "是" : "否";
    if (kind === "无提交类型") {
        switch (type) {
            case "新需求":
                type = "新功能";
                break;
            case "优化":
                type = "追加递交";
                break;
            case "缺陷":
                type = "BUG修复";
                break;
            default:
                break;
        }
    }
    if (summary !== description) {
        summary += description;
    }
    result = `
[JIRA编号] ${jiraId}
[修改内容] ${summary}
[提交类型] ${type}
[需要测试] ${test}
`;
    if (debug) {
        console.log(`result =\n`, result);
    }
    try {
        window.copy(result);
        alert(`copied!`);
    } catch (error) {
        console.error(`auto copy failed!`);
    }
    return result;
};

window.SVNCC = SVNCommitCommentsAutoGenerator;
// SVNCC({ kind: "BUG修复", testing: true, });


window.addEventListener("load", (event) => {
    console.log("All resources finished loading!", event);
    setTimeout(() => {
        try {
            SVNCC({ kind: "BUG修复", testing: true, });
        } catch (error) {
            console.log(`Content Script Error`, error);
        }
    }, 3000);
});

