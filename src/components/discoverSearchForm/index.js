import React, { useState } from "react";
import useForm from "react-hook-form";
import { withRouter } from "react-router-dom";

const DiscoverSearchForm = ({ history }) => {
    const { register, handleSubmit, errors, reset } = useForm({
        defaultValues: {
            sort_by: "popularity",
            sort_order: "desc",
            include_adult: false,
            year: "",
            with_genres: "",
        }
    });
    const select_values ={
        sort_by: "popularity",
        sort_order: "desc"
    }

    const onSubmit = data => {
        const sortString = data.sort_by + "." + data.sort_order;
        const queryString = 
        console.log(data);
        console.log(sortString);
        //history.push("/movies/favorites");
    };

    return (
        <form className="form bg-dark text-light" onSubmit={handleSubmit(onSubmit)}>
            <h3>Discover new movies</h3>
            <div className="form-check">
                <input type="checkbox" class="form-check-input" name="include_adult" ref={register} />
                <label class="form-check-label" for="exampleCheck1">Include Adult Movies</label>
            </div>
            {errors.include_adult && <p className=" text-white">{errors.author.message} </p>}
            <div class="form-group">
                <label>Sort By
                <select value={select_values.sort_by} class="form-control" name="sort_by" ref={register}>
                        <option value="popularity">Popularity</option>
                        <option value="release_date">Release Date</option>
                        <option value="vote_average">Vote Average</option>
                    </select>
                </label>
            </div>
            {errors.sort_by && (
                <p className="text-white">{errors.content.message} </p>
            )}
            <div class="form-group">
                <label>Sort Order
                <select value={select_values.sort_order} class="form-control" id="sort-order-dropdown" name="sort_order" ref={register}>
                    <option value="desc">Descending</option>
                    <option value="asc">Ascending</option>
                </select>
                </label>
            </div>
            {errors.sort_by && (
                <p className="text-white">{errors.content.message} </p>
            )}
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Year"
                    defaultValue={""}
                    name="year"
                    ref={register}
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
      </button>
            <button
                type="reset"
                className="btn btn-primary reset"
                onClick={() => {
                    reset({
                        author: "",
                        content: ""
                    });
                }}
            >
                Reset
      </button>
        </form>
    );
};

export default withRouter(DiscoverSearchForm);