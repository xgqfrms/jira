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


// window.addEventListener("load", (event) => {
//     console.log("All resources finished loading!", event);
//     setTimeout(() => {
//         try {
//             SVNCC({ kind: "BUG修复", testing: true, });
//         } catch (error) {
//             console.log(`Content Script Error`, error);
//         }
//     }, 3000);
// });

window.addEventListener("load", (event) => {
    console.log("All resources finished loading!", event);
    setTimeout(() => {
        try {
            // SVNCC({ kind: "BUG修复", testing: true, });
            let header = document.querySelector(`[class="jumbotron-lead"]`);
            let title = header.innerText;
            // alert(`title = ${title}`);
            // console.log(`title =`, title);
            // if (window.copy) {
            //     window.copy(title);
            //     alert(`copied!`);
            // } else {
            //     console.error(`auto copy failed!`, window);
            //     console.error(`auto copy failed!`, window.copy);
            //     // undefined
            // }
            // chrome.tabs.executeScript(
            //     null,
            //     {
            //         code: 'window.copy(' + title + ');',
            //     },
            // );
        } catch (error) {
            console.log(`Content Script Error`, error);
        }
    }, 3000);
});

// setInterval(() => {
//     let key = document.querySelector(`body`).classList.value;
//     try {
//         if (key) {
//             // window.copy(key);
//             // TypeError: window.copy is not a function
//             console.log(`${key} is copied!`);
//         } else {
//             console.warn(`${key} is not copied!`);
//         }
//     } catch (error) {
//         console.error(`copy error!`, error);
//     }
// }, 3000);