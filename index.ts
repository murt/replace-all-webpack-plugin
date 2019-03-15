import { Compiler } from "webpack";
import { SyncHook } from "tapable";
import { AsyncHook } from "async_hooks";

export const enum ReplaceAllWebpackPluginPhase {
    COMPILATION = "compilation",
    AFTER_COMPILATION = "afterCompile",
    EMIT = "emit",
    AFTER_EMIT = "afterEmit",
    DONE = "done",
};

export interface IReplaceAllWebpackPluginEntry {
    /**
     * Filters the files from the given compilation to run the entry on.
     */
    test?: string | RegExp;

    /**
     * Apply the entry at a given phase of compilation.
     */
    phase?: ReplaceAllWebpackPluginPhase;
};

export type ReplaceAllWebpackPluginOptions = IReplaceAllWebpackPluginEntry[];

export default class ReplaceAllWebpackPlugin {
    public readonly options: ReplaceAllWebpackPluginOptions;

    constructor (options: ReplaceAllWebpackPluginOptions) {
        this.options = options;
    }

    public apply(compiler: Compiler) {
        this.options.forEach(entry => {

        });
    }

    private makeHook(entry: IReplaceAllWebpackPluginEntry): SyncHook | AsyncHook {
        switch (entry.phase) {
            default:
                return new SyncHook();
        }
    }
}