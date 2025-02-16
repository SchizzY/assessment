# Issue Tracker Application

A modern, responsive issue tracking application built with Next.js, featuring optimistic updates and a seamless user experience.

## 🚀 Features

- **Real-time Issue Management**
  - Create, view, and delete issues
  - Optimistic updates for immediate feedback

- **Rich User Interface**
  - Skeleton loading states
  - Modal dialogs for desktop
  - Bottom drawers for mobile
  - Empty state handling

- **Performance Optimizations**
  - Memoized components
  - Efficient state management
  - Optimistic updates with fallback handling

## 🛠️ Technical Stack

- Next.js
- React Query for state management
- Tailwind CSS for styling
- Shadcn UI components
- TypeScript

## 🏗️ Setup Instructions

### Prerequisites
- Node.js version 22.14.0
- npm (Node Package Manager)

### Installation

1. Clone the repository
```
git clone [repository-url]
```
2. Install Node.js 22.14.0 
(_if you use nvm_)
```
nvm install 22.14.0
```
3. Install dependencies
```
npm install
```
4. Start the development server
```
npm run dev
```

## 🏛️ Architecture

### Component Structure

#### CreateIssueForm
- Form validation with required fields
- Real-time error handling
- Optimistic updates for better UX
- Feature selection with custom dropdown

#### ListIssues
- Reusable component architecture
- Skeleton loading states
- Empty state handling
- Integrated dialog management

### State Management

The application uses a custom `useIssues` hook that provides:
- Optimistic updates
- Error handling with state reversal
- Loading states
- Query invalidation
- Mutation handling

### Responsive Design

Components adapt to different screen sizes:
- Desktop: Modal dialogs for better interaction
- Mobile: Bottom drawers for natural touch interaction
- Responsive grid layout
- Adaptive UI elements

## 🎯 Key Implementation Details

### Optimistic Updates
The application implements optimistic updates in several key areas:
- Issue creation
- Issue deletion
- List updates

### Performance Optimization
- Memoized `IssueItem` component to prevent unnecessary re-renders
- Efficient state management with React Query
- Lazy loading of dialogs and drawers

### Error Handling
- Comprehensive error states
- Fallback UI for failed operations
- Automatic state recovery on error

## 🔄 Data Flow

1. User interactions trigger mutations
2. Optimistic updates provide immediate feedback
3. Backend operations execute asynchronously
4. Success/error states handle the final outcome
5. UI updates reflect the final state

## 🎨 UI/UX Considerations

- Consistent loading states
- Clear feedback mechanisms
- Intuitive mobile interactions
- Accessible dialog implementations
- Responsive design breakpoints

---

This project demonstrates modern React patterns and best practices while maintaining a focus on user experience and performance.