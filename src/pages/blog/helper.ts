import Label from 'components/Label';
import Post from 'groups/Post';

const removeDuplicateFilters = () => {
  // Detail duplicate filters logic:
  // - It may be better to use graphql to fetch these separately rather than together...
  // - Otherwise just implement some logic here..
};

export const parseNodes = (nodes, blogCallback, filterCallback) => {
  const ret = {
    blogs: [],
    filters: []
  };

  nodes.forEach((item, index) => {
    const { excerpt, frontmatter } = item;
    const { slug, stack } = frontmatter;

    const Filter = {
      Component: Label,
      props: {
        active: false,
        stack,
        isClickable: true,
        onClick: (e) => filterCallback(e, stack, index)
      }
    };

    ret.filters.push(Filter);

    const BlogPost = {
      Component: Post,
      props: {
        imageSrc: '',
        excerpt,
        slug,
        stack,
        callback: blogCallback
      }
    };

    ret.blogs.push(BlogPost);
  });

  return ret;
};

const removeFilter = (filters, filterIndex) => {
  const newFilters = [ ...filters ];
  const filter = newFilters[filterIndex];
  filter.props = {
    ...filter.props,
    active: false
  };

  return newFilters;
};

const addFilter = (filters, filterIndex) => {
  const newFilters = [ ...filters ];
  const filter = newFilters[filterIndex];
  filter.props = {
    ...filter.props,
    active: true
  };

  return newFilters;
};

const filterBlogs = (filterName, allBlogs) => {
  return allBlogs.filter(blog => blog.props.stack === filterName);
};

export const filterClickHandler = (
  filter,
  filterIndex,
  activeFilter,
  setFilters,
  setBlogs,
  allBlogs
) => {
  if (activeFilter.current) {
    if (activeFilter.current === filter) {
      activeFilter.current = '';

      setFilters(prevState => removeFilter(prevState, filterIndex));
      setBlogs(allBlogs);
    } else {
      activeFilter.current = filter;

      setFilters(prevState => {
        const tempState = removeFilter(prevState, filterIndex);
        return addFilter(tempState, allBlogs);
      });
      setBlogs(filterBlogs(filter, allBlogs));
    }
  } else {
    activeFilter.current = filter;

    setFilters(prevState => addFilter(prevState, filterIndex));
    setBlogs(filterBlogs(filter, allBlogs));
  }
};
