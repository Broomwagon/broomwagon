package cc.broomwagon.service;

import cc.broomwagon.dao.SegmentDao;
import cc.broomwagon.model.page.Segment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class DefaultSegmentManager implements SegmentManager {
    @Autowired
    private SegmentDao segmentDao;

    @Override
    public Iterable<Segment> getSegments() {
        return segmentDao.getSegments();
    }

    @Override
    public Optional<Segment> getSegmentById(Long id) {
        return segmentDao.getSegmentById(id);
    }

    @Override
    public Optional<Segment> update(Segment segment) {
        return segmentDao.update(segment);
    }

    @Override
    public Optional<Segment> save(Segment segment) {
        return segmentDao.save(segment);
    }

}
