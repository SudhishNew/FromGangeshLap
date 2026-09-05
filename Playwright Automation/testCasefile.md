# Test Cases for Automation Testing Practice

Application URL: https://testautomationpractice.blogspot.com/

## 1. Home Page Load
- Title: Verify the home page loads successfully
- Precondition: Browser is open
- Steps:
  1. Open the application URL
  2. Wait for the page to load
  3. Verify the page title is "Automation Testing Practice"
  4. Verify the heading "Automation Testing Practice" is visible
- Expected Result: The homepage loads and the main heading is displayed.

## 2. Navigation Menu Visibility
- Title: Verify navigation links are displayed
- Steps:
  1. Open the homepage
  2. Observe the top navigation menu
- Expected Result: Links such as Home, Udemy Courses, Online Trainings, Blog, and PlaywrightPractice are visible.

## 3. Data Entry Form Field Validation
- Title: Verify data entry form accepts user input
- Steps:
  1. Scroll to the Data Entry Form section
  2. Enter name, email, phone, and address
  3. Select gender, days, country, and colors
  4. Click Submit
- Expected Result: The form accepts valid input and submission is processed without errors.

## 4. Gender Selection
- Title: Verify gender radio buttons work correctly
- Steps:
  1. Open the data entry form
  2. Select Male and Female one at a time
- Expected Result: Only the selected radio button is active.

## 5. Day Checkboxes Selection
- Title: Verify multiple day checkboxes can be selected
- Steps:
  1. Open the form
  2. Select multiple day checkboxes
- Expected Result: All selected checkboxes remain checked and can be toggled independently.

## 6. Country Dropdown Selection
- Title: Verify country dropdown options are available
- Steps:
  1. Open the form
  2. Open the Country dropdown
  3. Select India from the list
- Expected Result: The selected country is displayed correctly.

## 7. File Upload - Single File
- Title: Verify single file upload works
- Steps:
  1. Scroll to Upload Files section
  2. Choose a valid file
  3. Click Upload Single File
- Expected Result: The selected file is uploaded successfully and a success message or upload status appears.

## 8. File Upload - Multiple Files
- Title: Verify multiple file upload works
- Steps:
  1. Scroll to Upload Files section
  2. Choose multiple valid files
  3. Click Upload Multiple Files
- Expected Result: All selected files are uploaded successfully.

## 9. Static Web Table Content Verification
- Title: Verify static web table displays expected rows and columns
- Steps:
  1. Scroll to Static Web Table
  2. Read the table headers and rows
- Expected Result: The table contains expected book, author, subject, and price values.

## 10. Dynamic Web Table Data Verification
- Title: Verify dynamic web table values are displayed correctly
- Steps:
  1. Open the Dynamic Web Table section
  2. Verify the rows for System, Firefox, Internet Explorer, and Chrome
- Expected Result: The table displays expected metrics for each process.

## 11. Pagination Web Table Navigation
- Title: Verify pagination links work
- Steps:
  1. Open the Pagination Web Table section
  2. Click page numbers 1, 2, 3, and 4
- Expected Result: The table updates and the selected page is highlighted or displayed correctly.

## 12. Simple Alert Handling
- Title: Verify simple alert can be handled
- Steps:
  1. Click the Simple Alert button
  2. Accept the alert
- Expected Result: The alert is displayed and accepted successfully.

## 13. Confirmation Alert Handling
- Title: Verify confirmation alert can be handled
- Steps:
  1. Click the Confirmation Alert button
  2. Accept or dismiss the alert
- Expected Result: The alert response is handled correctly.

## 14. Prompt Alert Handling
- Title: Verify prompt alert input works
- Steps:
  1. Click the Prompt Alert button
  2. Enter text in the prompt
  3. Accept the alert
- Expected Result: The entered text is accepted and reflected in the page state.

## 15. Mouse Hover Interaction
- Title: Verify dropdown appears on mouse hover
- Steps:
  1. Move the mouse over the Point Me button
- Expected Result: A dropdown menu opens as expected.

## 16. Double Click Copy Action
- Title: Verify double-click action copies text
- Steps:
  1. Enter text in Field1
  2. Double-click Copy Text
- Expected Result: The text from Field1 is copied into Field2.

## 17. Drag and Drop Interaction
- Title: Verify drag and drop works
- Steps:
  1. Drag the draggable item to the drop target
- Expected Result: The item is dropped successfully into the target area.

## 18. Slider Interaction
- Title: Verify slider updates range value
- Steps:
  1. Move the slider to a new position
- Expected Result: The displayed price range updates accordingly.

## 19. Broken Links Check
- Title: Verify broken links are identified correctly
- Steps:
  1. Click each broken link in the Labels And Links section
- Expected Result: Each link opens or returns the expected error status.

## 20. New Tab / Popup Window Handling
- Title: Verify new tab and popup window actions work
- Steps:
  1. Click New Tab
  2. Click Popup Windows
- Expected Result: New windows/tabs open correctly and can be handled by the automation script.
