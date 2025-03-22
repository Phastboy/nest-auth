
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreatePostInput {
    exampleField?: Nullable<number>;
}

export interface UpdatePostInput {
    id: number;
}

export interface CreateUserInput {
    exampleField?: Nullable<number>;
}

export interface UpdateUserInput {
    id: number;
}

export interface Post {
    exampleField?: Nullable<number>;
}

export interface IQuery {
    posts(): Nullable<Post>[] | Promise<Nullable<Post>[]>;
    post(id: number): Nullable<Post> | Promise<Nullable<Post>>;
    users(): Nullable<User>[] | Promise<Nullable<User>[]>;
    user(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export interface IMutation {
    createPost(createPostInput: CreatePostInput): Post | Promise<Post>;
    updatePost(updatePostInput: UpdatePostInput): Post | Promise<Post>;
    removePost(id: number): Nullable<Post> | Promise<Nullable<Post>>;
    createUser(createUserInput: CreateUserInput): User | Promise<User>;
    updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;
    removeUser(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export interface User {
    exampleField?: Nullable<number>;
}

type Nullable<T> = T | null;
