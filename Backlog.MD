## Feature 1: Notes CRUD Operations

**Description:**
- **As a** user,
- **I want** to create, read, update, and delete notes,
- **So that** I can manage my personal information effectively.

**Acceptance Criteria:**

1. **Create Notes:**
   - Users should be able to add new notes with a title and content.
   - Each note should automatically store creation date and time.
   - After creating a note, it should appear in the notes list.

2. **Read Notes:**
   - Users should be able to view a list of all their notes.
   - Users should be able to click on a note to view its full content.
   - Notes should display title, partial content preview, and creation/modification date in the list view.

3. **Update Notes:**
   - Users should be able to edit the title and content of existing notes.
   - Notes should store the last modification date when updated.
   - Changes should be saved automatically or with an explicit save button.

4. **Delete Notes:**
   - Users should be able to delete notes they no longer need.
   - A confirmation dialog should appear before permanent deletion.
   - After deletion, the note should be removed from the notes list immediately.

5. **Testing:**
   - Write unit tests for creating, retrieving, updating, and deleting notes.
   - Ensure proper error handling when operations fail.
   - Test that notes belong to the correct user and cannot be accessed by others.

6. **Documentation:**
   - All functions should include JSDoc comments explaining purpose, parameters, and return values.
   - README should include setup instructions and CRUD API endpoints documentation.
   - Code should include inline comments for complex logic.

## Feature 2

**Description:**
- **As a** user,
- **I want** to have a field for categories in the items,
- **So that** I can filter and display items based on their categories.

**Acceptance Criteria:**

1. **Category Field:**
   - Each item should have a category field.
   - The category field should be a dropdown list with predefined categories - 'Home', 'Personal' and 'Work.

2. **Filtering:**
   - Categories should be displayed as tabs on the UI.
   - When a category tab is selected, only items belonging to that category should be displayed.

3. **Displaying:**
   - The filtered items should be displayed in a list or grid format under the selected category tab.
   - The UI should update dynamically to reflect the filtered items when a tab is selected.

4. **Testing:**
   - Write unit tests to verify that items can be created and edited with a category.
   - Write unit tests to ensure that filtering by category works correctly.

5. **Documentation:**
   - Create user documentation explaining how to use and manage categories.
   - Add comments to category-related components explaining their functionality.

## Feature 3: Search Functionality

**Description:**
- **As a** user,
- **I want** to search through my notes quickly and efficiently,
- **So that** I can find specific information without manually browsing through all notes.

**Acceptance Criteria:**

1. **Search Interface:**
   - A search bar should be prominently displayed at the top of the notes list.
   - The search bar should have a clear icon to reset the search.
   - Search should start automatically as the user types (after 3 characters).

2. **Search Capabilities:**
   - Search should check both note titles and content.
   - Search should be case-insensitive.
   - Search should support partial word matches.
   - Search results should highlight matching terms.

3. **Results Display:**
   - Search results should be displayed in real-time as the user types.
   - Results should be ordered by relevance (number of matches).
   - If no results are found, a friendly "No matches found" message should be displayed.
   - The total number of matching notes should be displayed.

4. **Advanced Search:**
   - Users should be able to filter search results by category.
   - Users should be able to sort search results by date created, date modified, or title.
   - Users should be able to search within a specific date range.

5. **Testing:**
   - Write unit tests for the search algorithm.
   - Test edge cases like empty search, special characters, and very long search terms.

6. **Documentation:**
   - Document the search algorithm with explanations of relevance scoring.
   - Add inline comments explaining regex patterns and search logic.

## Other things that can be tried

- Create new features in the code
- Ask Copilot to make the UI better
