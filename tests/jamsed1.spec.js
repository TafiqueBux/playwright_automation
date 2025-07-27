import {test} from "@playwright/test";

    test("Sign up user ${index}", async({page}) => {
    // await page.setViewportSize({width:1920,height:1080})

    await page.goto("https://www.automationexercise.com/")
      
    await page.getByRole("link",{name:" Signup / Login"}).click()
    await page.locator("(//input[@name='email'])[1]").fill("Taufiq@gmail.com")
    await page.getByPlaceholder("Password").fill("Pappu786@")
    await page.getByRole('button', { name: "Login" }).click()
    await page.waitForTimeout(2000)
    
    })


    