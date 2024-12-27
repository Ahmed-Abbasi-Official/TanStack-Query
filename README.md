# TanStack `useQuery` Documentation

The `useQuery` hook from TanStack Query is a powerful utility for fetching and managing data in your React applications. This README outlines the key features and usage of `useQuery` with detailed explanations of its options and returned values.

---

## Installation

To use TanStack Query in your project, first install the necessary package:

```bash
npm install @tanstack/react-query
```

Or with Yarn:

```bash
yarn add @tanstack/react-query
```

---

## Basic Usage

Here is an example of using `useQuery`:

```jsx
import { useQuery } from '@tanstack/react-query';

  const {
    isPending,
    data,
    isError,
    error,
    refetch
  } = useQuery({
    queryKey: ['data'],
    queryFn: fetchData,
    staleTime: 5000,
    refetchInterval: 10000,
    placeholderData: { items: [] },
  });

  if (isPending) return <div>Loading...</div>;

  if (isError) return <div>Error: {error.message}</div>;

---

## Options

### `queryFn`
- **Type**: `Function`
- **Description**: The function that fetches the data. It must return a promise that resolves with the fetched data or rejects with an error.

### `queryKey`
- **Type**: `Array` or `String`
- **Description**: A unique key used to identify the query. It ensures that cached data is specific to this query.

### `staleTime`
- **Type**: `Number` (milliseconds)
- **Description**: The amount of time after a query is fetched before it is considered stale. Defaults to `0`.

### `GC time`
- **Type**: `Number` (milliseconds)
- **Description**: Time in milliseconds after which unused query data is garbage collected. Defaults to `5 minutes`.

### `refetchInterval`
- **Type**: `Number` (milliseconds)
- **Description**: Enables automatic refetching at a specified interval. Disabled by default (`false`).

### `refetchIntervalInBackground`
- **Type**: `Boolean`
- **Description**: Allows the query to continue refetching at the specified interval even when the tab is inactive. Defaults to `false`.

### `placeholderData`
- **Type**: `Any`
- **Description**: Data to display while the query is loading for the first time. Can be useful for improving perceived performance.

---

## Returned Values

### `isPending`
- **Type**: `Boolean`
- **Description**: Indicates whether the query is currently fetching data.

### `data`
- **Type**: `Any`
- **Description**: The data returned by the query function. If the query is loading, this will be `undefined` unless `placeholderData` is provided.

### `isError`
- **Type**: `Boolean`
- **Description**: Indicates whether the query encountered an error.

### `error`
- **Type**: `Error`
- **Description**: The error object returned by the query function if it fails.

---

---

## Notes
- Always ensure `queryKey` is unique for each query.
- Use `placeholderData` to avoid empty UI states while the data is being fetched.
- Fine-tune `staleTime` and `GC time` for optimal cache performance.

---

For more advanced features, refer to the official [TanStack Query Documentation](https://tanstack.com/query/latest).
