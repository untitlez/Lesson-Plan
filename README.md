## 📂 Project Structure

---

### CLIENT

```plaintext

client/
├── app/
│   ├── (pages)/                  
│   │   ├── auth/
│   │   │   ├── sign-in/ 
│   │   │   │   └── page.tsx
│   │   │   │
│   │   │   └── sign-up/ 
│   │   │       └── page.tsx
│   │   │   
│   │   ├── document/
│   │   │   ├── [id]/ 
│   │   │   │   └── page.tsx
│   │   │   │   
│   │   │   └── page.tsx
│   │   │   
│   │   ├── lesson-plan/
│   │   │   └── page.tsx
│   │   │   
│   │   └──  office/
│   │        ├── [id]/ 
│   │        │   └── page.tsx
│   │        │
│   │        ├── activities/ 
│   │        │   └── page.tsx
│   │        │
│   │        ├── assessment/ 
│   │        │   └── page.tsx
│   │        │
│   │        ├── class-level/ 
│   │        │   ├── primary/ 
│   │        │   │   └── page.tsx
│   │        │   │
│   │        │   └── secondary/ 
│   │        │       └── page.tsx
│   │        │
│   │        ├── objectives/ 
│   │        │   └── page.tsx
│   │        │
│   │        ├── subject/ 
│   │        │   ├── subject-list/ 
│   │        │   │   └── page.tsx
│   │        │   │   
│   │        │   └── page.tsx
│   │        │
│   │        ├── layout.tsx 
│   │        ├── loading.tsx 
│   │        └── page.tsx 
│   │        
│   │   
│   ├── layout.tsx                
│   ├── globals.css
│   └── page.tsx                  
│                         
├── components/
│   ├── auth/
│   │   ├── sign-in/
│   │   │   ├── app-signin.tsx
│   │   │   ├── signin-form.tsx
│   │   │   ├── signin-popup.tsx
│   │   │   └── signin-submit.tsx
│   │   │   
│   │   └── sign-up/
│   │       ├── app-sign-up.tsx
│   │       ├── sign-up-form.tsx
│   │       └── sign-up-submit.tsx
│   │   
│   ├── document/
│   │   └── document-pdf.tsx
│   │   
│   ├── form/
│   │   ├── app-form.tsx
│   │   ├── form-detail.tsx
│   │   ├── form-search-select.tsx
│   │   ├── form-select.tsx
│   │   ├── form-submit.tsx
│   │   ├── form-text.tsx
│   │   ├── form-textarea.tsx
│   │   └── form-tools.tsx
│   │   
│   ├── office/
│   │   ├── content/
│   │   │   ├── subject/
│   │   │   │   ├── subject-add.tsx
│   │   │   │   ├── subject-delete.tsx
│   │   │   │   └── subject-edit.tsx 
│   │   │   │   
│   │   │   ├── content-card.tsx
│   │   │   ├── content-delete.tsx
│   │   │   ├── content-info.tsx
│   │   │   ├── content-stat.tsx
│   │   │   └── content-table.tsx 
│   │   │   
│   │   ├── header/
│   │   │   ├── app-header.tsx
│   │   │   └── header-info.tsx 
│   │   │ 
│   │   └── sidebar/
│   │       ├── app-sidebar.tsx
│   │       ├── sidebar-account.tsx
│   │       ├── sidebar-footer-menu.tsx
│   │       ├── sidebar-main-menu.tsx
│   │       ├── sidebar-sign-out.tsx
│   │       └── sidebar-sub-menu.tsx
│   │   
│   ├── ui/
│   │   └── ...
│   │   
│   ├── home.tsx
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
│   
├── hooks/
│   ├── use-auth-header.ts
│   └── use-mobile.ts
│   
├── lib/
│   ├── config.ts
│   ├── constant-auth.ts
│   ├── constant-form.ts
│   ├── constant-path-name.ts
│   ├── constant-sidebar.ts
│   ├── cookies.ts
│   ├── fetch.ts
│   ├── routes.ts
│   └── utils.ts 
│
├── validators/
│   ├── form.validator.ts
│   ├── subject.validator.ts
│   └── user.validator.ts
│
├── public/                   
├── .env
├── .gitignore
└── README.md

```
---

### SERVER

```plaintext

server/
├── config/
│   └── db.js
│
├── controllers/
│   ├── auth.js
│   ├── images.js
│   ├── lesson-plan.js
│   ├── subject.js
│   └── user.js
│
├── middleware/
│   └── auth.js
│
├── model/
│   ├── lesson-plan.js
│   ├── subject.js
│   └── user.js
│
├── routes/
│   ├── private/                  
│   │   ├── lesson-plan.js
│   │   ├── subject.js
│   │   └── user.js
│   │   
│   └── public/                  
│       ├── auth.js
│       ├── guest.js
│       └── images.js
│
├── services/
│   ├── auth.js
│   ├── images.js
│   ├── lesson-plan.js
│   ├── subject.js
│   └── user.js
│
├── index.js 
│
├── .env 
├── .gitignore 
├── package.json
└── README.md

```
