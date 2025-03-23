
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreatePostInput {
    userId: string;
    content: string;
}

export interface UpdatePostInput {
    id: number;
}

export interface CreateUserInput {
    email: string;
    username: string;
    password: string;
}

export interface UpdateUserInput {
    id: number;
}

export interface Post {
    id: string;
    userId: string;
    content: string;
    createdAt?: Nullable<string>;
    updatedAt?: Nullable<string>;
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
    id: string;
    email: string;
    username: string;
    password: string;
    avatar?: Nullable<string>;
    posts?: Nullable<Nullable<Post>[]>;
    createdAt?: Nullable<string>;
    updatedAt?: Nullable<string>;
}

type Nullable<T> = T | null;
