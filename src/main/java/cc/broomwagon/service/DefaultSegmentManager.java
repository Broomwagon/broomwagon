package cc.broomwagon.service;

import cc.broomwagon.dao.SegmentDao;
import cc.broomwagon.model.page.Segment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DefaultSegmentManager implements SegmentManager {
    @Autowired
    private SegmentDao segmentDao;

    @Override
    public Iterable<Segment> getSegments() {
        return segmentDao.getSegments();
    }

}
