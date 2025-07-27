import {test} from "@playwright/test";

// test("Navigate to Checkbox",async ({page})=>{
//     await page.goto("await page.goto('https://www.lambdatest.com/selenium-playground/');")
//     // await page.locator("//a[text()='Checkbox Demo']").click()
//     //page.getByRole()
//     //page.getByText()
//     //page.getByTitle()
//     //page.getByLabel()
//     // page.getByPlaceholder()
//     //page.getByAltText()
//     //page.getByTestId()
       //page.locator()

//     // await page.getByRole("link",{name:'Checkbox Demo'}).click()/
//     await page.getByText('Checkbox Demo').click()
// })

    test("Sign up user ${index}", async({page}) => {
    // await page.setViewportSize({width:1920,height:1080})

    await page.goto("https://www.automationexercise.com/")
      
    await page.getByRole("link",{name:" Signup / Login"}).click()

    // await page.getByPlaceholder("Name").fill("Taufiq")
    // // await page.getByRole("textbox",{name: "Email Address"}).fill("Taufiq@gmail.com")
    // await page.locator("(//*[@name='email'])[2]").fill("Taufiq@gmail.com")
    // await page.getByRole("button",{name:"Signup"}).click()
    // await page.getByRole("radio",{name:"Mr."}).check()
    // await page.waitForTimeout(2000)
    // await page.selectOption('#days', { value: '10' });
    await page.locator("(//input[@name='email'])[1]").fill("Taufiq@gmail.com")
    await page.getByPlaceholder("Password").fill("Pappu786@")
    await page.getByRole('button', { name: "Login" }).click()
    await page.waitForTimeout(2000)
    //await page.locator('(//a[@data-product-id="1"])[1]').scrollIntoViewIfNeeded();
        await page.locator('(//a[@data-product-id="1"])[1]').click()
        await page.getByText('Continue Shopping').click()
    })


    